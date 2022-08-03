import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'', component: AppComponent,
    children:[
      {
        path:'movies', 
        loadChildren: () => import('./pages/movies/pages/list-movies/list-movies.module').then( m => m.ListMoviesModule)
      },
      {
        path:'actors', 
        loadChildren: () => import('./pages/actors/pages/list-actors/list-actors.module').then( m => m.ListActorsModule)
      },
      {
        path:'companies', 
        loadChildren: () => import('./pages/companies/pages/list-companies/list-companies.module').then( m => m.ListCompaniesModule)
      },  
      {
        path: '', redirectTo: 'movies', pathMatch:'full'
      },
      {
        path: '**', redirectTo: 'not-found', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
