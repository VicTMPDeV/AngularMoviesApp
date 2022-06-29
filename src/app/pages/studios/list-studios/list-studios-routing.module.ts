import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudiosComponent } from './list-studios.component';
import { DetailActorComponent } from '../../actors/detail-actors/detail-actor.component';

const routes: Routes = [
  {
    path: '', component: ListStudiosComponent,
  },
  {
    path: ':id', component: DetailActorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStudiosRoutingModule { }
