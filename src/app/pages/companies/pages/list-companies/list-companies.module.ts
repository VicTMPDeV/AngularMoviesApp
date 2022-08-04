import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { ListCompaniesComponent } from '@pages/companies/pages/list-companies/list-companies.component';
import { ListCompaniesRoutingModule } from '@pages/companies/pages/list-companies/list-companies-routing.module';


@NgModule({
  declarations: [
    ListCompaniesComponent
  ],
  imports: [
    CommonModule,
    ListCompaniesRoutingModule,
    SpinnerModule
  ]
})
export class ListCompaniesModule { }
