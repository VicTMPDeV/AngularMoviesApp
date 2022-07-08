import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ActorDto } from '../../actors/models/dto/actorDto.interface';
import { ActorsService } from '../../actors/services/actors.service';
import { CompanyDto } from '../../companies/models/dto/companyDto.interface';
import { MovieDto } from '../models/dto/movieDto.interface';
import { Movie } from '../models/movie.interface';
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
        console.log(this.movieDto.id);
        console.log(this.movieActorsDto);
        // this.movie.id = this.movieDto.id;
        // this.movie.title = this.movieDto.title;
        // this.movie.poster = this.movieDto.poster!;
        // movie.genres = movieDto.genre;
        // this.movie.year = this.movieDto.year;
        // this.movie.duration = this.movieDto.duration;
        // this.movie.imdbRating = this.movieDto.imdbRating;
        // this.movie.actors = this.movieActorsDto;
        // movie.companies = CompanyDto;

        this.movie = this.movieBuilder(this.movieDto, this.movieActorsDto);
        console.log(this.movie);
      }); 

  }

  // public movieBuilder(movieDto: MovieDto, actorsDto: ActorDto[]): void {
  //   this.movie.id = movieDto.id;
  //   this.movie.title = movieDto.title;
  //   this.movie.poster = movieDto.poster!;
  //   // movie.genres = movieDto.genre;
  //   this.movie.year = movieDto.year;
  //   this.movie.duration = movieDto.duration;
  //   this.movie.imdbRating = movieDto.imdbRating;
  //   this.movie.actors = actorsDto;
  //   // movie.companies = CompanyDto;
  // }

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
      // console.log('GENRES STRING: ', value);
      movie.genres.push()
    });
    return movie;
  }

}
