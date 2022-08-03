import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardMovieComponent } from '@components/card-movie/card-movie.component';
import { ImageMoviePipe } from '@pipes/image-movie-pipe/image-movie.pipe';


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
