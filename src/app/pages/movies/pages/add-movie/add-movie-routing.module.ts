import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from '@pages/movies/pages/add-movie/add-movie.component';


const routes: Routes = [
  {
    path: '', component: AddMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMovieRoutingModule { }
