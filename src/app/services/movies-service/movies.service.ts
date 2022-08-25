import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Constants } from '@constants/constants';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { environment } from 'src/environments/environment.pre';


@Injectable()
export class MoviesService {

  constructor( private http: HttpClient ) { }


  public getMovies(): Observable<MovieDto[]> {
    return this.http.get<MovieDto[]>(`${environment.baseUrl}/${Constants.MOVIES_ENDPOINT}`);
  }

  public getMovieById( id: string ): Observable<MovieDto> {
    return this.http.get<MovieDto>(`${environment.baseUrl}/${Constants.MOVIES_ENDPOINT}/${id}`);
  }

  public addMovie( movieDto: MovieDto ): Observable<MovieDto> {
    return this.http.post<MovieDto>(`${environment.baseUrl}/${Constants.MOVIES_ENDPOINT}`, movieDto);
  }

  public updateMovie( movieDto: MovieDto ): Observable<MovieDto> {
    return this.http.put<MovieDto>(`${environment.baseUrl}/${Constants.MOVIES_ENDPOINT}/${movieDto.id}`, movieDto);
  }

  public deleteMovie( id: number ): Observable<MovieDto> {
    return this.http.delete<MovieDto>(`${environment.baseUrl}/${Constants.MOVIES_ENDPOINT}/${id}`);
  }

}
