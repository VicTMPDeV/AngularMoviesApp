import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MoviesService } from 'src/app/services/movies-service/movies.service';
import { MovieDto } from '../../../../models/movies/dto/movieDto.interface';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None //VIP -> Propagar estilos generales en lugar de encapsular el componente
})
export class ListMoviesComponent implements OnInit {

  public moviesList: MovieDto[] = [];
  
  constructor(private _moviesService: MoviesService) { }

  ngOnInit(): void {

    this._moviesService.getMovies()
      .subscribe( response => this.moviesList = response);

  }

}

