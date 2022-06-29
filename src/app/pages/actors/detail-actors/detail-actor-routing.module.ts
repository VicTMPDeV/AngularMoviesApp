import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailActorComponent } from './detail-actor.component';

const routes: Routes = [
  {
    path: '', component: DetailActorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailActorRoutingModule { }
