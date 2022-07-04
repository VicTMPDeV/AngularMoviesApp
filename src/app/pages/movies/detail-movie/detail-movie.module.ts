//@angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//Featured Components
import { DetailMovieComponent } from './detail-movie.component';

import { DetailMovieRoutingModule } from './detail-movie-routing.module';


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
