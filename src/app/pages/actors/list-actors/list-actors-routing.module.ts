import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActorsComponent } from './list-actors.component';
import { DetailActorComponent } from '../detail-actors/detail-actor.component';

const routes: Routes = [
  {
    path: '', component: ListActorsComponent,
  },
  {
    path: ':id', component: DetailActorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActorsRoutingModule { }
