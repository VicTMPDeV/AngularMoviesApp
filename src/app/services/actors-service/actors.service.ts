import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { environment } from 'src/environments/environment.pre';

@Injectable()
export class ActorsService {

  constructor( private http: HttpClient ) { }

  public getActors(): Observable<ActorDto[]> {
    return this.http.get<ActorDto[]>(`${environment.baseUrl}/actors`);
  } 

  public getActorById( id: number ): Observable<ActorDto>{
    return this.http.get<ActorDto>(`${environment.baseUrl}/actors/${id}`);
  }

}
