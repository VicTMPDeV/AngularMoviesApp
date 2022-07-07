import { Pipe, PipeTransform } from '@angular/core';
import { MovieDto } from "../models/dto/movieDto.interface";

@Pipe({
  name: 'imageMoviePipe'
})
export class ImageMoviePipe implements PipeTransform {

  transform(movie: MovieDto): string {
    return (!movie.poster)?'assets/images/no_image_available.jpg':movie.poster;
  }

}
