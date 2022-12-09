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
export class MovieSearchComponent {

  @Output() searchEvent = new EventEmitter<string>();

  private searchTerm = new Subject<string>();

  input: string = '';

  assignInput(userInput: string){
    this.input = userInput;
  }

  sendTerm() {
    this.searchEvent.emit(this.input);
    console.log(`Term sent: ${this.input}`);
  }
 
  constructor(private movieService: MovieService){}

  search(term: string): void{
    this.searchTerm.next(term);
  }
}
