import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from '@pages/movies/pages/list-movies/list-movies.component';


const routes: Routes = [
  {
    path: '', component: ListMoviesComponent
  },
  {
    path: 'add',  
    loadChildren: () => import('@pages/movies/pages/add-movie/add-movie.module').then(m => m.AddMovieModule)
  },
  {
    path: 'edit/:id',  
    loadChildren: () => import('@pages/movies/pages/add-movie/add-movie.module').then(m => m.AddMovieModule)
  },
  {
    path: ':id',  
    loadChildren: () => import('@pages/movies/pages/detail-movie/detail-movie.module').then( m => m.DetailMovieModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMoviesRoutingModule { }
