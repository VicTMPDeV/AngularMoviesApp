//@angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
//Featured Components
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'', 
        component: HomeComponent
      },
      {
        path:'movies/list', 
        loadChildren: () => import('../movies/list-movies/list-movies.module')
                              .then( m => m.ListMoviesModule)
      },
      {
        path:'actors/list', 
        loadChildren: () => import('../actors/list-actors/list-actors.module')
                              .then( m => m.ListActorsModule)
      },
      {
        path:'studios/list', 
        loadChildren: () => import('../studios/list-studios/list-studios.module')
                              .then( m => m.ListStudiosModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
