import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActorsComponent } from './list-actors.component';

const routes: Routes = [
  {
    path: '', component: ListActorsComponent,
    children:[
      {
        path:':id',
        loadChildren: () => import('../detail-actors/detail-actor.module').then( m => m.DetailActorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActorsRoutingModule { }
