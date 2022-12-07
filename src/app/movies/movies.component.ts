import { Component, OnInit, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { Observable, Subject } from 'rxjs';

import { Genre, Movie } from '../movie';
import { MovieService } from '../movie.service';

const movieData: Movie[] = [
  {id: 1, runtime: 3, description: 'example', genre: Genre.Action, title: 'example title', releaseDate: new Date()}
]



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  message = 'will it work?'

  movies$!: Observable<Movie[]>;

  // receiveMessage($event: string){
  //   this.message = $event
  //   console.log('message received')
  // }

  receiveSearchResults($event: Observable<Movie[]>){
    this.movies$ = $event
    console.log('results received')
  }

  movies: Movie[] = movieData;
  displayedColumns: string[] = ['title', 'description', 'runtime', 'releaseDate'];
  

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.getMovies();
    console.log('movies logged');
  }


  getMovies(){
    this.movieService.getMovies()
    .subscribe(movies => this.movies = movies)
  }

  
  

}
