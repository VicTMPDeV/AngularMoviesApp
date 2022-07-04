import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies.component';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';

const routes: Routes = [
  {
    path: '', component: ListMoviesComponent
  },
  {
    path: 'add', component: AddMovieComponent
  },
  {
    path: 'edit/:id', component: AddMovieComponent
  },
  {
    path: ':id', component: DetailMovieComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMoviesRoutingModule { }
