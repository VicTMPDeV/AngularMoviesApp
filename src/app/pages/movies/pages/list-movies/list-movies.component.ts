import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private _moviesService: MoviesService,
    private _navigationService: NavigationService,
    private _toolbarService: ToolbarServiceService) { }

  ngOnInit(): void {

    this._toolbarService.setToolbarText('PELÍCULAS'); //TODO -> MOVER A CONSTANTES

    this._moviesService.getMovies()
      .subscribe({
        next: (response: MovieDto[]) => {
          this.moviesList = response;
        },
        error: (err: HttpErrorResponse) => {
          console.error('ERROR: ', err.error); //PONER CONSTANTE ERROR
          this._navigationService.getErrorPage();
        }
      });

  }

}

