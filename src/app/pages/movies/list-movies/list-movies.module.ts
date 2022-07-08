//@angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//@angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//Featured Modules
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { ListMoviesComponent } from './list-movies.component';
import { CardMovieModule } from '../components/card-movie/card-movie.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRoutingModule,
    CardMovieModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule
  ]
})
export class ListMoviesModule { }
