import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudiosComponent } from './list-studios.component';

const routes: Routes = [
  {
    path: '', component: ListStudiosComponent,
    children:[
      {
        path:':id',
        loadChildren: () => import('../detail-studio/detail-studio.module').then( m => m.DetailStudioModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStudiosRoutingModule { }
