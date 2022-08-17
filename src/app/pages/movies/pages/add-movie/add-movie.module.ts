import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AddMovieRoutingModule } from '@pages/movies/pages/add-movie/add-movie-routing.module';
import { AddMovieComponent } from '@pages/movies/pages/add-movie/add-movie.component';
import { CompaniesService } from '@services/companies-service/companies.service';
import { MoviesService } from '@services/movies-service/movies.service';


@NgModule({
  declarations: [
    AddMovieComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AddMovieRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule
  ],
  providers: [
    MoviesService,
    CompaniesService
  ]
})
export class AddMovieModule { }
