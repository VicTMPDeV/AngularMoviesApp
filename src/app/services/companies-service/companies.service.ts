import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.pre';

@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) { }

  //TODO -> ENDPOINT.COMPANIES Constante de companies
  public getCompanies(): Observable<CompanyDto[]>{
    return this.http.get<CompanyDto[]>(`${environment.baseUrl}/companies`);
  }

  public updateCompany( companyDto: CompanyDto ): Observable<CompanyDto> {
    return this.http.put<CompanyDto>(`${environment.baseUrl}/companies/${companyDto.id}`, companyDto);
  }
  
}
