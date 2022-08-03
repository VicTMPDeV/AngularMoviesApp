import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailActorComponent } from '../../../actors/pages/detail-actors/detail-actor.component';
import { ListCompaniesComponent } from './list-companies.component';

const routes: Routes = [
  {
    path: '', component: ListCompaniesComponent,
  },
  {
    path: ':id', component: DetailActorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCompaniesRoutingModule { }
