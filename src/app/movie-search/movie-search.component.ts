import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Movie } from '../movie'
import { MovieService } from '../movie.service'

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit{

  message: string = ' '

  @Output() messageEvent = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<Observable<Movie[]>>();

  sendMessage() {
    this.message = 'This is a test!';
    this.messageEvent.emit(this.message);
    console.log(`message sent: "${this.message}"`);
  }

  sendSearchResults() {
    this.searchEvent.emit(this.movies$);
    console.log(`Search results sent!`);
  }

  movies$!: Observable<Movie[]>;
 
  constructor(private movieService: MovieService){}

  private searchTerms = new Subject<string>();

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
   this.movies$ = this.searchTerms.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term: string) => this.movieService.searchMovies(term)),
   );
   this.sendSearchResults();
   console.log(`message sent: component initialized `);
 }
  
}
