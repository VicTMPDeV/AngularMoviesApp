import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CardMovieModule } from '@components/card-movie/card-movie.module';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { TranslateModule } from '@ngx-translate/core';
import { ListMoviesRoutingModule } from '@pages/movies/pages/list-movies/list-movies-routing.module';
import { ListMoviesComponent } from '@pages/movies/pages/list-movies/list-movies.component';
import { MoviesService } from '@services/movies-service/movies.service';


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
    SpinnerModule,
    TranslateModule.forChild()
  ],
  providers: [
    MoviesService
  ]
})
export class ListMoviesModule { }
