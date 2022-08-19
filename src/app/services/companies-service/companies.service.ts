import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.pre';

@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) { }

  public getCompanies(): Observable<CompanyDto[]>{
    return this.http.get<CompanyDto[]>(`${environment.baseUrl}/companies`);
  }

  // TODO -> Cuando añado una nueva película, el estudio relacionado se tiene que actualizar PUT, no POST
  // public addMovieToCompany(): Observable
  
}
