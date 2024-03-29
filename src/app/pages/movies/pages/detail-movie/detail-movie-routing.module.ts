import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMovieComponent } from '@pages/movies/pages/detail-movie/detail-movie.component';


const routes: Routes = [
  {
    path: '', component: DetailMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailMovieRoutingModule { }
