//@angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//@angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
//Featured Modules
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { ListMoviesComponent } from './list-movies.component';


@NgModule({
  declarations: [
    ListMoviesComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class ListMoviesModule { }
