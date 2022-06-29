import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies.component';

const routes: Routes = [
  {
    path: '', component: ListMoviesComponent,
    children:[
      {
        path:':id',
        loadChildren: () => import('../detail-movie/detail-movie.module').then( m => m.DetailMovieModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMoviesRoutingModule { }
