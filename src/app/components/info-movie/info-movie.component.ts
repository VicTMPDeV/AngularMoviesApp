import { Component, Input } from '@angular/core';
import { Movie } from '@models/movies/movie.interface';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent {

  @Input()
  public movieDetail!:Movie;

}
