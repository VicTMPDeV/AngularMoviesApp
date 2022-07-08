//@angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//Material Modules
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DetailMovieModule { }
