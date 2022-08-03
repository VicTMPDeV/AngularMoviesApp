import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardMovieComponent } from './card-movie.component';
import { ImageMoviePipe } from 'src/app/pipes/image-movie-pipe/image-movie.pipe';


@NgModule({
  declarations: [
    CardMovieComponent,
    ImageMoviePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CardMovieComponent
  ]
})
export class CardMovieModule { }
