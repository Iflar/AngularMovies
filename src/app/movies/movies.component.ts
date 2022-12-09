import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { concat, Observable, of, Subject, switchMap, distinctUntilChanged, debounceTime} from 'rxjs';

import { Genre, Movie } from '../movie';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  searchTerm: string = '';

  receiveTerm($event: string) {
    this.searchTerm = $event;
  }

  movies$: Observable<Movie[]> = this.movieService.getMovies();

  searchMovies$!: Observable<Movie[]>;

  // movieTableData$: Observable<Movie[]> = concat(this.movies$, this.searchMovies$);

  displayedColumns: string[] = ['title', 'description', 'runtime', 'releaseDate'];
  

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.searchForMovies();
  }

  private searchTerms = new Subject<string>();

  searchForMovies(){
    console.log('search method ran')
    this.searchMovies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term)),
     );
  }
}
