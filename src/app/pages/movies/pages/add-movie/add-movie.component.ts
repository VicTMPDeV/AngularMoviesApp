import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Genre } from '@models/movies/movie.interface';
import { Movie } from '@models/movies/movie.interface';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';
import { Constants } from '@constants/constants';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { MoviesService } from '@services/movies-service/movies.service';
import { MovieDto } from '../../../../models/movies/dto/movieDto.interface';
import { DataBuilderService } from '@services/data-service/data-builder.service';
import { CompaniesService } from '@services/companies-service/companies.service';
import { NavigationService } from '@services/navigation-service/navigation.service';
import { CompanyDto } from '../../../../models/companies/dto/companyDto.interface';
import { ActorsService } from '@services/actors-service/actors.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  encapsulation: ViewEncapsulation.None //Añadido para poder modificar el estilo del panel que aparecía transparente
})
export class AddMovieComponent implements OnInit {

  public CONST: typeof Constants = Constants; //Referencia para el uso en templates

  public genres: Genre[] = Object.values<Genre>(Genre);
  public actors: ActorDto[] = []; 
  public companies: CompanyDto[] = [];

  public movie: Movie = {} as Movie;
  public movieDto: MovieDto = {} as MovieDto;

  movieForm: FormGroup = new FormGroup({

  });
  
  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _toolbarService: ToolbarServiceService,
              private _navigationService: NavigationService,
              private _dataBuilderService: DataBuilderService,
              private _moviesService: MoviesService,
              private _companiesService: CompaniesService,
              private _actorsService: ActorsService) { }

  ngOnInit(): void {

    this.loadActors();
    this.loadCompanies();

    if(this._router.url === Constants.ROUTE_MOVIES_ADD){
      this._toolbarService.setToolbarText(Constants.ADD_MOVIE);
    }else{
      const movieId = this._activatedRoute.snapshot.paramMap.get(Constants.ROUTE_PARAM_ID) ?? Constants.ZERO.toString();
      this._toolbarService.setToolbarText(Constants.EDIT_MOVIE + movieId );
      
      this._moviesService.getMovieById(movieId)
        .subscribe({
          next:(response: MovieDto) => {
            this.movieDto = response;
            console.log(this.movieDto);
            console.log(this.actors);
            console.log(this.companies);
            //TODO -> CONTINUE HERE -> mirar VALUE del input para setearlo cuando entre por aqui, así se entiende que es editar
          },
          error: (errorResponse: HttpErrorResponse) => {
            console.error('ERROR: ',errorResponse.error);
            this._navigationService.getErrorPage();
          }
        })
    }

  }

  public loadActors(): void {
    this._actorsService.getActors()
      .subscribe((response: ActorDto[]) => {
        this.actors = response;
      })
  }

  public loadCompanies(): void {
    this._companiesService.getCompanies()
      .subscribe((response: CompanyDto[]) => {
        this.companies = response;
      })
  }

  public removeGenreChip(genre: Genre): void {
    this.movie.genres?.splice(this.movie.genres.indexOf(genre), Constants.ONE);
  }

  public removeActorChip(actor: ActorDto): void {
    this.movie.actors?.splice(this.movie.actors.indexOf(actor), Constants.ONE);
  }

  public saveMovie(): void {
    console.log(this.movie);
    this._moviesService.addMovie(this._dataBuilderService.movieDtoBuilder(this.movie))
      .subscribe(resp => {
        console.log('RESPUESTA POST: ', resp);
        this._navigationService.getBackLocation();
      })
  }

    //TODO -> Objeto MovieMapped -> Si está vacío es una pelicula nueva, sino es edición

  //TODO2 -> Además me tengo que traer todos los actores y estudios para el combo del formulario

}
