import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  // public getCompanyByMovie( movieId: number ): Observable<CompanyDto>{

  //   //TODO -> LO MAS PROBABLE QUE ME TENGA QUE TRAER TODAS
  //   const queryParams = new HttpParams()
  //     .set('movies',);

  //   return this.http.get<CompanyDto>(`${this._baseUrl}/actors`, {queryParams : params});
  // }
}
