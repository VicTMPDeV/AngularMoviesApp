import { Injectable } from '@angular/core';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Genre, Movie } from '@models/movies/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class DataBuilderService {

  public movie: Movie = {} as Movie;

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

    movieDto.genre.forEach(genre => {
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
  
}
