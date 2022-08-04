import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageMoviePipe } from '@pipes/image-movie-pipe/image-movie.pipe';


@NgModule({
  declarations: [ 
    ImageMoviePipe 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageMoviePipe
  ]
})
export class ImageMoviePipeModule { }
