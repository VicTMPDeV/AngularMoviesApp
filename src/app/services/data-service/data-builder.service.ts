import { Injectable } from '@angular/core';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Genre, Movie } from '@models/movies/movie.interface';
import { NavigationService } from '../navigation-service/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class DataBuilderService {

  public mappedMovie: Movie = {} as Movie;

  constructor(private _navigationService: NavigationService) { }

  public showUrl(): void {
    this._navigationService.getCurrentUrl().subscribe(value => console.log('EOOOO', value));
  }

  public movieBuilder(movieDto: MovieDto, actorsDto: ActorDto[], companyDto: CompanyDto[]): Movie {
    
    this.mappedMovie.id = movieDto.id;
    this.mappedMovie.title = movieDto.title;
    this.mappedMovie.poster = movieDto.poster!;
    this.mappedMovie.genres = [];
    this.mappedMovie.year = movieDto.year;
    this.mappedMovie.duration = movieDto.duration;
    this.mappedMovie.imdbRating = movieDto.imdbRating;
    this.mappedMovie.actors = actorsDto;
    this.mappedMovie.company = {} as CompanyDto;

    movieDto.genre.forEach(value => {
      this.mappedMovie.genres.push( (<any>Genre)[value]);
    });
    
    companyDto.forEach(company => {
      company.movies.forEach(movieValue => {
        if(this.mappedMovie.id === movieValue){
          this.mappedMovie.company = company;
        }
      })
    });

    return this.mappedMovie;
  }
  
}
