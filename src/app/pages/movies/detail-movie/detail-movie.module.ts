//@angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Featured Modules
import { DetailMovieRoutingModule } from './detail-movie-routing.module';
import { DetailMovieComponent } from './detail-movie.component';


@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule
  ]
})
export class DetailMovieModule { }
