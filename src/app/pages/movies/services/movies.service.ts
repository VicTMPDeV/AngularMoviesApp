import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.pre';
import { MovieDto } from '../models/dto/movieDto.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  public getMovies(): Observable<MovieDto[]>{
    return this.http.get<MovieDto[]>(`${environment.baseUrl}/movies`);
  }

  public getMovieById( id: number ): Observable<MovieDto>{
    return this.http.get<MovieDto>(`${environment.baseUrl}/movies/${id}`);
  }

}
