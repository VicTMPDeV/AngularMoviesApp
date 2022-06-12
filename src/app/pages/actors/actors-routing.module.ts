import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./list-actors/list-actors.module').then( m => m.ListActorsModule)
  },
  {
    path:':id',
    loadChildren: () => import('./detail-actors/detail-actor.module').then( m => m.DetailActorModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
