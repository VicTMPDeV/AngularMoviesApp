import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { ListMoviesComponent } from './list-movies.component';


@NgModule({
  declarations: [
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRoutingModule
  ]
})
export class ListMoviesModule { }
