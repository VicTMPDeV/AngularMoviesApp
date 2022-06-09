import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
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
export class HomeModuleRoutingModule { }
