import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { ActorsService } from '@services/actors-service/actors.service';
import { MoviesService } from '@services/movies-service/movies.service';
import { Movie } from '@models/movies/movie.interface';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { DataService } from '@services/data-service/data.service';
import { CompaniesService } from '@services/companies-service/companies.service';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public movieDto!: MovieDto;
  public movieActorsDto: ActorDto[] = [];
  public movieCompanyDto!: CompanyDto;
  public mappedMovie!: Movie;

  constructor(private _activatedRoute: ActivatedRoute,
              private _moviesService: MoviesService,
              private _actorsService: ActorsService,
              private _companiesService: CompaniesService,
              private _dataService: DataService) { }

  ngOnInit(): void {
    this._activatedRoute.params 
      .pipe(
        switchMap( ({id}) => this._moviesService.getMovieById(id) )
      )
      .subscribe( (movieResponse: MovieDto) => {
        this.movieDto = movieResponse;
        this.movieDto.actors.forEach( (actorId: number) => {
          this._actorsService.getActorsById(actorId)
            .subscribe((actorResp: ActorDto) => {
                this.movieActorsDto.push(actorResp);
            });
        });
        //TODO -> Companies map
      }); 
      this.mappedMovie = this._dataService.movieBuilder(this.movieDto, this.movieActorsDto);

  }

}