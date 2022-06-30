import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardMovieComponent } from './card-movie.component';


@NgModule({
  declarations: [
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CardMovieComponent
  ]
})
export class CardMovieModule { }
