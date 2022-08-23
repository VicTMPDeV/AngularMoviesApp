import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SpinnerModule } from '@components/spinner/spinner.module';
import { ListCompaniesComponent } from '@pages/companies/pages/list-companies/list-companies.component';
import { ListCompaniesRoutingModule } from '@pages/companies/pages/list-companies/list-companies-routing.module';
import { CompaniesService } from '@services/companies-service/companies.service';


@NgModule({
  declarations: [
    ListCompaniesComponent
  ],
  imports: [
    CommonModule,
    ListCompaniesRoutingModule,
    SpinnerModule,
    TranslateModule.forChild()
  ],
  providers: [
    CompaniesService
  ]
})
export class ListCompaniesModule { }
