import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageMoviePipeModule } from '@pipes/image-movie-pipe/image-movie-pipe.module';
import { InfoMovieComponent } from './info-movie.component';


@NgModule({
  declarations: [
    InfoMovieComponent
  ],
  imports: [
    CommonModule,
    ImageMoviePipeModule
  ],
  exports: [
    InfoMovieComponent
  ]
})
export class InfoMovieModule { }
