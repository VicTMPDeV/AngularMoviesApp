import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '@constants/constants';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Movie } from '@models/movies/movie.interface';


@Pipe({
  name: 'imageMovie'
})
export class ImageMoviePipe implements PipeTransform {

  transform(movie: MovieDto | Movie): string {
    return (!movie.poster) ? Constants.NO_IMAGE : movie.poster;
  }

}
