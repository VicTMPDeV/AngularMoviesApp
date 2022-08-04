import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageMoviePipeModule } from '@pipes/image-movie-pipe/image-movie-pipe.module';
import { InfoMovieComponent } from './info-movie.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    InfoMovieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    ImageMoviePipeModule
  ],
  exports: [
    InfoMovieComponent
  ]
})
export class InfoMovieModule { }
