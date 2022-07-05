import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.pre';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private _baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  public getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(`${this._baseUrl}/movies`);
  }

  public getMovie(): Observable<Movie>{
    return this.http.get<Movie>(`${this._baseUrl}/movies/:id`);
  }



}
