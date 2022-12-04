import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Movie, Genre } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const movies = [
      { id: 1, runtime: 3, title: 'Avatar: The Way of Water', description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together.', genre: Genre.Action, releaseDate: new Date('2022-12-16')  },
      { id: 2, runtime: 3, title: 'Example Movie Two', description: 'This movie is also here for testing purposes', genre: Genre.Thriller, releaseDate: new Date('2023-03-08')  },
    ];
    return {movies};
  }

  genId(movies: Movie[]): number{
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
  
}
