import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from "../models/movie.interface";

@Pipe({
  name: 'imageMoviePipe'
})
export class ImageMoviePipe implements PipeTransform {

  transform(movie: Movie): string {
    return (!movie.poster)?'assets/images/no_image_available.jpg':movie.poster;
  }

}
