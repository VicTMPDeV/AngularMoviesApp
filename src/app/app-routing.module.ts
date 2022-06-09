import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'movies/list', 
    loadChildren: () => import('./pages/movies/list-movies/list-movies.module')
                          .then( m => m.ListMoviesModule)
  },
  {
    path:'actors/list', 
    loadChildren: () => import('./pages/actors/list-actors/list-actors.module')
                          .then( m => m.ListActorsModule)
  },
  {
    path:'studios/list', 
    loadChildren: () => import('./pages/studios/list-studios/list-studios.module')
                          .then( m => m.ListStudiosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
