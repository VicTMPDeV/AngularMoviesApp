import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieDto } from '../models/dto/movieDto.interface';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None //VIP -> Propagar estilos generales en lugar de encapsular el componente
})
export class ListMoviesComponent implements OnInit {

  public moviesList: MovieDto[] = [];
  
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.moviesService.getMovies()
      .subscribe( moviesResp => this.moviesList = moviesResp);

  }

}
