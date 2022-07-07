import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.pre';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActorDto } from './models/dto/actorDto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private _baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  public getActorsByMovies( idMovie: number ): Observable<ActorDto>{
    
    const queryParams = new HttpParams()
        .set('movies','3,7');

    return this.http.get<ActorDto>(`${this._baseUrl}/actors`, { params: queryParams });

  }
}
