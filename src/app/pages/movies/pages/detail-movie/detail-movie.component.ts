import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Movie } from '@models/movies/movie.interface';
import { ActorsService } from '@services/actors-service/actors.service';
import { CompaniesService } from '@services/companies-service/companies.service';
import { DataBuilderService } from '@services/data-service/data-builder.service';
import { MoviesService } from '@services/movies-service/movies.service';
import { NavigationService } from '@services/navigation-service/navigation.service';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public mappedMovie!: Movie;

  constructor(private _activatedRoute: ActivatedRoute,
              private _moviesService: MoviesService,
              private _actorsService: ActorsService,
              private _companiesService: CompaniesService,
              private _dataService: DataBuilderService,
              private _navigationService: NavigationService) { }

  ngOnInit(): void {

    this.getMappedMovie();
    
  }

  public getMappedMovie(): void{

    let movieDto: MovieDto = {} as MovieDto;
    let movieActors: ActorDto[] = [];
    let companies: CompanyDto[] = [];

    this._moviesService.getMovieById(this._activatedRoute.snapshot.paramMap.get('id')!) 
      .subscribe( {
        next: (movieResponse: MovieDto) => {
          movieDto = movieResponse;
          movieDto.actors.forEach( (actorId: number) => {
            this._actorsService.getActorById(actorId)
              .subscribe((actorResp: ActorDto) => {
                movieActors.push(actorResp);
              });
          });
          this._companiesService.getCompanies()
            .subscribe((companiesResp: CompanyDto[]) => {
              companies = companiesResp;
              this.mappedMovie = this._dataService.movieBuilder(movieDto, movieActors, companies); 
            });
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.error('ERROR: ',errorResponse.error);
          this._navigationService.getErrorPage();
        }
      })

  }

}