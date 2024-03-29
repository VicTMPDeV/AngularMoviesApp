import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { Constants } from '@constants/constants';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Genre, Movie } from '@models/movies/movie.interface';
import { ActorsService } from '@services/actors-service/actors.service';
import { CompaniesService } from '@services/companies-service/companies.service';
import { DataService } from '@services/data-service/data.service';
import { MoviesService } from '@services/movies-service/movies.service';
import { NavigationService } from '@services/navigation-service/navigation.service';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';
import { NgForm } from '@angular/forms';
import { ErrorsDialogComponent } from '@components/errors-dialog/errors-dialog.component';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  encapsulation: ViewEncapsulation.None //Añadido para poder modificar el estilo del panel que aparecía transparente
})
export class AddMovieComponent implements OnInit {

  //Form binding
  @ViewChild('movieForm') form!: NgForm;
  //Combo containers
  public genresList: Genre[] = Object.values<Genre>(Genre);
  public actorsList: ActorDto[] = []; 
  public companiesList: CompanyDto[] = [];
  //Form validators
  public readonly urlPattern: RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  public urlPatternFieldValid: boolean = false;
  //Object form mapper
  public movieFormMapper!: Movie;
  //Object http requests for insert/update
  public movieDto: MovieDto = {} as MovieDto;
  public movieActorsDto: ActorDto[] = [];
  public movieCompanyDto: CompanyDto = {} as CompanyDto;
  //Rest of attributes
  public CONST: typeof Constants = Constants;
  public isUpdate: boolean = false;

  
  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _toolbarService: ToolbarServiceService,
              private _navigationService: NavigationService,
              private _dataService: DataService,
              private _moviesService: MoviesService,
              private _companiesService: CompaniesService,
              private _actorsService: ActorsService,
              private _dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private _translate: TranslateService) { }

  ngOnInit(): void {

    this.loadActors();
    this.loadCompanies();

    if(this._router.url === Constants.ROUTE_MOVIES_ADD){ //ADD MOVIE

      this.isUpdate = false;
      this.movieFormMapper = {} as Movie;
      this._toolbarService.setToolbarText(Constants.ADD_MOVIE);

    }else{ //UPDATE MOVIE

      this.isUpdate = true;
      const movieId = this._activatedRoute.snapshot.paramMap.get(Constants.ROUTE_PARAM_ID) ?? Constants.ZERO.toString();
      
      this._moviesService.getMovieById(movieId)
        .subscribe({
          next:(response: MovieDto) => {
            
            this.movieDto = response;

            this._toolbarService.setToolbarText(Constants.EDIT_MOVIE);

            this.movieActorsDto = this.actorsList?.filter((actor: ActorDto) => {
              return this.movieDto.actors.includes(actor.id);
            })

            this.movieCompanyDto = this.companiesList?.find((company: CompanyDto) => {
              return company.movies?.includes(this.movieDto.id!);
            })!;

            this.movieFormMapper = this._dataService.movieBuilder(this.movieDto, this.movieActorsDto, this.movieCompanyDto); 

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
        this.actorsList = response;
      })
  }

  public loadCompanies(): void {
    this._companiesService.getCompanies()
      .subscribe((response: CompanyDto[]) => {
        this.companiesList = response;
      })
  }

  public validateUrlField(field:string): void {
    this.urlPatternFieldValid = this.form?.controls[field]?.errors?.['pattern'];
  }

  public getCurrentYear(): string {
    return new Date().getFullYear().toString();
  }

  public removeGenreChip(genre: Genre): void {
    this.movieFormMapper.genres?.splice(this.movieFormMapper.genres.indexOf(genre), Constants.ONE);
  }

  public removeActorChip(actor: ActorDto): void {
    this.movieFormMapper.actors?.splice(this.movieFormMapper.actors.indexOf(actor), Constants.ONE);
  }

  public removeCompanyChip(): void {
    this.movieFormMapper.company = {} as CompanyDto;
  }

  public saveMovie(): void {

    if(this.form.invalid){ // FORM WITH ERRORS

      this.form.control.markAllAsTouched();
      this._dialog.open(ErrorsDialogComponent, {
        width: Constants.DIALOG_WIDTH
      });
      return;

    }else{ // VALID FORM

      if (this.movieDto.id) { //UPDATE
        
        this.movieDto = this._dataService.movieDtoBuilder(this.movieFormMapper);
        this._moviesService.updateMovie(this.movieDto)
          .subscribe( (updatedMovie: MovieDto) => {

            if(this.movieFormMapper.company !== this.movieCompanyDto){

              this.movieCompanyDto.movies.splice(this.movieCompanyDto?.movies?.indexOf(updatedMovie.id!), Constants.ONE);
              this._companiesService.updateCompany(this.movieCompanyDto).subscribe();
              this.movieCompanyDto = this.movieFormMapper.company;
              this.movieCompanyDto.movies.push(updatedMovie.id!);
              this._companiesService.updateCompany(this.movieCompanyDto).subscribe();

            }

            this.showSnackBar(this._translate.instant(Constants.UPDATED_MOVIE_MESSAGE));

          });

        this._navigationService.getBackLocation();

      } else { //CREATE
        
        this.movieDto = this._dataService.movieDtoBuilder(this.movieFormMapper);

        this._moviesService.addMovie(this.movieDto)
          .subscribe( (createdMovie: MovieDto) => {
            this.movieCompanyDto = this.movieFormMapper.company;
            if(this.movieCompanyDto){
              this.movieCompanyDto.movies?.push(createdMovie.id!);
              this._companiesService.updateCompany(this.movieCompanyDto).subscribe();
            }

            this.showSnackBar(this._translate.instant(Constants.CREATED_MOVIE_MESSAGE));
          });

        this._navigationService.getListMoviesPage();
        
      }
    }
  }

  public showSnackBar(message: string) {
    this._snackBar.open(message, this._translate.instant(Constants.MESSAGE_BUTTON_LABEL), {
      duration: Constants.MESSAGE_DURATION,
      panelClass: ['snack-bar-container--custom']
    });
  }

}
