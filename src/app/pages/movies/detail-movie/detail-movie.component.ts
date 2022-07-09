import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ActorDto } from '../../actors/models/dto/actorDto.interface';
import { ActorsService } from '../../actors/services/actors.service';
import { CompanyDto } from '../../companies/models/dto/companyDto.interface';
import { MovieDto } from '../models/dto/movieDto.interface';
import { Genre, Movie } from '../models/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public movieDto!: MovieDto;
  public movieActorsDto: ActorDto[] = [];
  public movieCompanyDto!: CompanyDto;
  // public movie!: Movie;
  public movie: Movie = {} as Movie;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private actorsService: ActorsService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.moviesService.getMovieById(id) )
      )
      .subscribe( (movieResp: MovieDto) => {
        this.movieDto = movieResp;
        //N suscripciones dentro de la primera -> mirar (mergeAll?) operador de RxJS que reciba N observables y devuelve un array de objetos -> this.actorsService.getActorsById(actorId)
        this.movieDto.actors.forEach( (actorId: number) => {
          this.actorsService.getActorsById(actorId)
            .subscribe((actorResp: ActorDto) => {
                this.movieActorsDto.push(actorResp);
            });
        });

        this.movie = this.movieBuilder(this.movieDto, this.movieActorsDto);

      }); 

  }

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
