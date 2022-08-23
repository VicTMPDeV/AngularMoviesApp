import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { DetailCompanyComponent } from '@pages/companies/pages/detail-company/detail-company.component';


@NgModule({
  declarations: [
    DetailCompanyComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ]
})
export class DetailCompanyModule { }
