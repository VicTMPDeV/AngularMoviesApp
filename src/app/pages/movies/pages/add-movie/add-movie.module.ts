import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from '@pages/movies/pages/add-movie/add-movie.component';
import { AddMovieRoutingModule } from '@pages/movies/pages/add-movie/add-movie-routing.module';


@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    AddMovieRoutingModule
  ]
})
export class AddMovieModule { }
