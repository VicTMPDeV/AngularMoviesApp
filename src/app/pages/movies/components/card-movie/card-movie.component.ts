import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input('movieData')
  movie!: Movie;

}
