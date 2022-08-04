import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { MoviesService } from '@services/movies-service/movies.service';
import { NavigationService } from '@services/navigation-service/navigation.service';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  providers: []
})
export class ListMoviesComponent implements OnInit {

  public moviesList: MovieDto[] = [];
  
  constructor(private _moviesService: MoviesService,
              private _navigationService: NavigationService) { }

  ngOnInit(): void {

    this._moviesService.getMovies()
      .subscribe({
        next: (response: MovieDto[]) => {
          this.moviesList = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error('ERROR: ', err.error);
          this._navigationService.getErrorPage();
        }
      });

  }

}

