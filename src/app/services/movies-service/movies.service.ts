import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.pre';

@Injectable()
export class MoviesService {

  constructor( private http: HttpClient ) { }

  public getMovies(): Observable<MovieDto[]>{
    return this.http.get<MovieDto[]>(`${environment.baseUrl}/movies`);
  }

  public getMovieById( id: string ): Observable<MovieDto>{
    return this.http.get<MovieDto>(`${environment.baseUrl}/movies/${id}`);
  }

  public deleteMovie( id: number ): Observable<MovieDto>{
    return this.http.delete<MovieDto>(`${environment.baseUrl}/movies/${id}`);
  }

}
