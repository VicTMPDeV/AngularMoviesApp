import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from '@pages/movies/pages/add-movie/add-movie.component';
import { AddMovieRoutingModule } from '@pages/movies/pages/add-movie/add-movie-routing.module';
import { FormMovieModule } from '@components/form-movie/form-movie.module';


@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    AddMovieRoutingModule,
    FormMovieModule
  ]
})
export class AddMovieModule { }
