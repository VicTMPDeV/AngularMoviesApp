import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InfoMovieModule } from '@components/info-movie/info-movie.module';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { DetailMovieRoutingModule } from '@pages/movies/pages/detail-movie/detail-movie-routing.module';
import { ConfirmDialogModule } from '@components/confirm-dialog/confirm-dialog.module';
import { DetailMovieComponent } from '@pages/movies/pages/detail-movie/detail-movie.component';


@NgModule({
  declarations: [
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    DetailMovieRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    SpinnerModule,
    InfoMovieModule,
    ConfirmDialogModule
  ]
})
export class DetailMovieModule { }
