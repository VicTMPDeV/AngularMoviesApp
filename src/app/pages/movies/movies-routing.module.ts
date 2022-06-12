import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./list-movies/list-movies.module').then( m => m.ListMoviesModule)
  },
  {
    path:':id',
    loadChildren: () => import('./detail-movie/detail-movie.module').then( m => m.DetailMovieModule)
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
