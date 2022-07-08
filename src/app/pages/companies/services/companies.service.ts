import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.pre';
import { CompanyDto } from '../models/dto/companyDto.interface';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private _baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // public getCompanyByMovie( movieId: number ): Observable<CompanyDto>{

  //   //TODO -> LO MAS PROBABLE QUE ME TENGA QUE TRAER TODAS
  //   const queryParams = new HttpParams()
  //     .set('movies',);

  //   return this.http.get<CompanyDto>(`${this._baseUrl}/actors`, {queryParams : params});
  // }
}
