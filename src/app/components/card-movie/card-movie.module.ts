import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardMovieComponent } from '@components/card-movie/card-movie.component';
import { TruncateTextPipeModule } from '../../pipes/truncate-text-pipe/truncate-text-pipe.module';
import { ImageMoviePipeModule } from '../../pipes/image-movie-pipe/image-movie-pipe.module';


@NgModule({
  declarations: [
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ImageMoviePipeModule,
    TruncateTextPipeModule
  ],
  exports: [
    CardMovieComponent
  ]
})
export class CardMovieModule { }
