import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { AddMovieRoutingModule } from '@pages/movies/pages/add-movie/add-movie-routing.module';
import { AddMovieComponent } from '@pages/movies/pages/add-movie/add-movie.component';
import { CompaniesService } from '@services/companies-service/companies.service';
import { MoviesService } from '@services/movies-service/movies.service';
import { ActorsService } from '@services/actors-service/actors.service';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { ErrorDialogModule } from '@components/errors-dialog/errors-dialog.module';


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
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    MatSnackBarModule,
    SpinnerModule,
    ErrorDialogModule,
    TranslateModule.forChild()
  ],
  providers: [
    MoviesService,
    ActorsService,
    CompaniesService
  ]
})
export class AddMovieModule { }
