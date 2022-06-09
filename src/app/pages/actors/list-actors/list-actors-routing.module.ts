import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActorsComponent } from './list-actors.component';

const routes: Routes = [
  {
    path: '', component: ListActorsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActorsRoutingModule { }
