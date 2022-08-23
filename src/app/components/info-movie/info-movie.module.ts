import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

import { ImageMoviePipeModule } from '@pipes/image-movie-pipe/image-movie-pipe.module';
import { InfoMovieComponent } from './info-movie.component';


@NgModule({
  declarations: [
    InfoMovieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    ImageMoviePipeModule,
    TranslateModule.forChild()
  ],
  exports: [
    InfoMovieComponent
  ]
})
export class InfoMovieModule { }
