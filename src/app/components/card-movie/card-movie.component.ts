import { Component, Input } from '@angular/core';
import { MovieDto } from '@models/movies/dto/movieDto.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {

  @Input('movieData')
  movie!: MovieDto;

}
