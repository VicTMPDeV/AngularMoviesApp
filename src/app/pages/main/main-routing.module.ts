//@angular Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Featured Components
import { HomeComponent } from '../home/home.component';
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
        path:'movies', 
        loadChildren: () => import('../movies/movies.module').then( m => m.MoviesModule)
      },
      {
        path:'actors', 
        loadChildren: () => import('../actors/actors.module').then( m => m.ActorsModule)
      },
      {
        path:'studios', 
        loadChildren: () => import('../studios/studios.module').then( m => m.StudiosModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
