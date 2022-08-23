import { Component, Input } from '@angular/core';

import { Constants } from '@constants/constants';
import { Movie } from '@models/movies/movie.interface';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent {

  public CONST: typeof Constants = Constants;
  
  @Input()
  public movieDetail!:Movie;

}
