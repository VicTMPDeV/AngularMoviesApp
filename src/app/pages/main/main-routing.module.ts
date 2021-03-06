//@angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Featured Components
import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:'', component: MainComponent,
    children:[
      {
        path:'', 
        component: HomeComponent
      },
      {
        path:'movies', 
        loadChildren: () => import('../movies/list-movies/list-movies.module').then( m => m.ListMoviesModule)
      },
      {
        path:'actors', 
        loadChildren: () => import('../actors/list-actors/list-actors.module').then( m => m.ListActorsModule)
      },
      {
        path:'companies', 
        loadChildren: () => import('../companies/list-companies/list-companies.module').then( m => m.ListCompaniesModule)
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
