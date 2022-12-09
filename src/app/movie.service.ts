import { Injectable } from '@angular/core';
import { Observable, of, catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = 'api/movies';

  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesUrl)
    .pipe(catchError(this.handleError<Movie[]>('getMovies', [])))
  }

  getMovie(id: number): Observable<Movie>{
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url).pipe(
      catchError(this.handleError<Movie>(`getMovie: id=${id}`))
    );
  }

  
  searchMovies(term: string): Observable<Movie[]>{
    if(!term.trim()){
      return of([]);
    }
    console.log(`movies searched`)
    return this.http.get<Movie[]>(`${this.moviesUrl}/?title=${term}`).pipe(
      catchError(this.handleError<Movie[]>('searchMovies', []))
    )
  }

  
  constructor(private http: HttpClient) { }
}
