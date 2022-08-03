import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Genre, Movie } from 'src/app/models/movies/movie.interface';
import { ActorsService } from 'src/app/services/actors-service/actors.service';
import { MoviesService } from 'src/app/services/movies-service/movies.service';
import { ActorDto } from '../../../../models/actors/dto/actorDto.interface';
import { CompanyDto } from '../../../../models/companies/dto/companyDto.interface';
import { MovieDto } from '../../../../models/movies/dto/movieDto.interface';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public movieDto!: MovieDto;
  public movieActorsDto: ActorDto[] = [];
  public movieCompanyDto!: CompanyDto;
  public movie!: Movie;
  // public movie: Movie = {} as Movie;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private actorsService: ActorsService) { }

  ngOnInit(): void {
    this.activatedRoute.params 
      .pipe(
        switchMap( ({id}) => this.moviesService.getMovieById(id) ) //Observable interno que se suscribe automáticamente
      )
      .subscribe( (movieResponse: MovieDto) => {
        this.movieDto = movieResponse;
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
