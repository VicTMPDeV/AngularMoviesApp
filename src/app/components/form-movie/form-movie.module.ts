import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormMovieComponent } from './form-movie.component';


@NgModule({
  declarations: [
    FormMovieComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ],
  exports: [
    FormMovieComponent
  ]
})
export class FormMovieModule { }
