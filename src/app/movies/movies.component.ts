import { Component, OnInit } from '@angular/core';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  dataSource = this.movies;

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
