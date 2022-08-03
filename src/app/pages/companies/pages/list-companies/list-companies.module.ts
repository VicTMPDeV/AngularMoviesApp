import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCompaniesComponent } from './list-companies.component';
import { ListCompaniesRoutingModule } from './list-companies-routing.module';


@NgModule({
  declarations: [
    ListCompaniesComponent
  ],
  imports: [
    CommonModule,
    ListCompaniesRoutingModule
  ]
})
export class ListCompaniesModule { }
