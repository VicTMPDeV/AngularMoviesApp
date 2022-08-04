import { Injectable } from '@angular/core';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Genre, Movie } from '@models/movies/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public movieBuilder(movieDto: MovieDto, actorsDto: ActorDto[]): Movie {
    
    const movie: Movie = {} as Movie;

    movie.id = movieDto.id;
    movie.title = movieDto.title;
    movie.poster = movieDto.poster!;
    movie.genres = [];
    movie.year = movieDto.year;
    movie.duration = movieDto.duration;
    movie.imdbRating = movieDto.imdbRating;
    movie.actors = actorsDto;
    // movie.companies = CompanyDto;

    movieDto.genre.forEach(value => {
      movie.genres.push( (<any>Genre)[value]);
    });

    return movie;
  }
  
}
