//@angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//Featured Components
import { DetailMovieComponent } from './detail-movie.component';
//Featured Modules
import { DetailMovieRoutingModule } from './detail-movie-routing.module';


@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class DetailMovieModule { }
