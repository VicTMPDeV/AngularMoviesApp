import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies.component';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';

const routes: Routes = [
  {
    path: '', component: ListMoviesComponent, data: { currentPage: 'movies' }
  },
  {
    path: 'add', component: AddMovieComponent, data: { currentPage: 'addMovie' }
  },
  {
    path: 'edit/:id', component: AddMovieComponent, data: { currentPage: 'editMovie' }
  },
  {
    path: ':id', component: DetailMovieComponent, data: { currentPage: 'detailMovie' }
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
