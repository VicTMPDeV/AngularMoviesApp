import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Constants } from '@constants/constants';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { MoviesService } from '@services/movies-service/movies.service';
import { NavigationService } from '@services/navigation-service/navigation.service';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  public moviesList: MovieDto[] = [];
  public emptyData: boolean = false;

  constructor(private _moviesService: MoviesService,
    private _navigationService: NavigationService,
    private _toolbarService: ToolbarServiceService) { }

  ngOnInit(): void {
    this.initData();
  }

  public initData(): void {

    this._toolbarService.setToolbarText(Constants.MOVIE_LIST);

    this._moviesService.getMovies()
      .subscribe({
        next: (response: MovieDto[]) => {
          if (response.length === 0) {
            this.emptyData = true;
          }
          this.moviesList = response;
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.error(Constants.ERROR, errorResponse.error);
          this._navigationService.getErrorPage();
        }
      });
  }

}

