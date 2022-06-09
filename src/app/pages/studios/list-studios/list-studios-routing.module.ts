import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudiosComponent } from './list-studios.component';

const routes: Routes = [
  {
    path: '', component: ListStudiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStudiosRoutingModule { }
