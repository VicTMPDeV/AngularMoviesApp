import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetailMovieRoutingModule } from '@pages/movies/pages/detail-movie/detail-movie-routing.module';
import { DetailMovieComponent } from '@pages/movies/pages/detail-movie/detail-movie.component';
import { SpinnerModule } from '../../../../components/spinner/spinner.module';


@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    MatIconModule,
    MatButtonModule,
    SpinnerModule
  ]
})
export class DetailMovieModule { }
