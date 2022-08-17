import { Injectable } from '@angular/core';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Genre, Movie } from '@models/movies/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class DataBuilderService {

  private movie: Movie = {} as Movie;
  private movieDto: MovieDto = {} as MovieDto;


  public movieBuilder(movieDto: MovieDto, actorsDto: ActorDto[], companyDto: CompanyDto[]): Movie {
    
    this.movie.id = movieDto.id;
    this.movie.title = movieDto.title;
    this.movie.poster = movieDto.poster!;
    this.movie.genres = [];
    this.movie.year = movieDto.year;
    this.movie.duration = movieDto.duration;
    this.movie.imdbRating = movieDto.imdbRating;
    this.movie.actors = actorsDto;
    this.movie.company = {} as CompanyDto;

    movieDto.genre?.forEach(genre => {
      this.movie.genres.push((<any>Genre)[genre]);
    });
    
    companyDto.forEach((company: CompanyDto) => {
      company.movies.filter(movieValue => {
        if(this.movie.id === movieValue){
          this.movie.company = company;
        }
      })
    });

    return this.movie;
  }


  public movieDtoBuilder(movie: Movie): MovieDto {

    this.movieDto.id = movie.id;
    this.movieDto.title = movie.title;
    this.movieDto.poster = movie.poster ?? null;
    this.movieDto.genre = Object.values<Genre>(movie.genres);
    this.movieDto.year = movie.year;
    this.movieDto.duration = movie.duration;
    this.movieDto.imdbRating = movie.imdbRating;
    this.movieDto.actors = [];

    movie.actors.forEach((actor: ActorDto) => {
      this.movieDto.actors.push(actor.id);
    })

    return this.movieDto;
  }
  
}
