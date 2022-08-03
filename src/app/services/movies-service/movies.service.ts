import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { environment } from 'src/environments/environment.pre';

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
