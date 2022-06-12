import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./list-studios/list-studios.module').then( m => m.ListStudiosModule)
  },
  {
    path:':id',
    loadChildren: () => import('./detail-studio/detail-studio.module').then( m => m.DetailStudioModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudiosRoutingModule { }
