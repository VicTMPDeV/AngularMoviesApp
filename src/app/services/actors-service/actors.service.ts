import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.pre';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { Constants } from '@constants/constants';


@Injectable()
export class ActorsService {

  constructor( private http: HttpClient ) { }

  
  public getActors(): Observable<ActorDto[]> {
    return this.http.get<ActorDto[]>(`${environment.baseUrl}/${Constants.ACTORS_ENDPOINT}`);
  } 

  public getActorById( id: number ): Observable<ActorDto>{
    return this.http.get<ActorDto>(`${environment.baseUrl}/${Constants.ACTORS_ENDPOINT}/${id}`);
  }

}
