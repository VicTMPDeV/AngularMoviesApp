import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.pre';
import { ActorDto } from '../models/dto/actorDto.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private _baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  public getActorsById( id: number ): Observable<ActorDto>{
    return this.http.get<ActorDto>(`${this._baseUrl}/actors/${id}`);
  }

  
}
