import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.pre';
import { Constants } from '@constants/constants';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';


@Injectable()
export class CompaniesService {

  constructor(private http: HttpClient) { }


  public getCompanies(): Observable<CompanyDto[]>{
    return this.http.get<CompanyDto[]>(`${environment.baseUrl}/${Constants.COMPANIES_ENDPOINT}`); 
  }

  public updateCompany( companyDto: CompanyDto ): Observable<CompanyDto> {
    return this.http.put<CompanyDto>(`${environment.baseUrl}/${Constants.COMPANIES_ENDPOINT}/${companyDto.id}`, companyDto); 
  }
  
}
