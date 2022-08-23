import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

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


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  encapsulation: ViewEncapsulation.None //Añadido para poder modificar el estilo del panel que aparecía transparente
})
export class AddMovieComponent implements OnInit {

  public CONST: typeof Constants = Constants; //Referencia para el uso en templates
  public isUpdate: boolean = false;

  public genresList: Genre[] = Object.values<Genre>(Genre);
  public actorsList: ActorDto[] = []; 
  public companiesList: CompanyDto[] = [];

  public movie!: Movie;
  
  public movieDto: MovieDto = {} as MovieDto;
  public movieActors: ActorDto[] = [];
  public movieCompany: CompanyDto = {} as CompanyDto;

  private readonly urlPattern: RegExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  public movieForm!: FormGroup;

  
  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _toolbarService: ToolbarServiceService,
              private _navigationService: NavigationService,
              private _dataService: DataService,
              private _moviesService: MoviesService,
              private _companiesService: CompaniesService,
              private _actorsService: ActorsService,
              private _snackBar: MatSnackBar,
              private _formBuilder: FormBuilder) { }


  ngOnInit(): void {

    this.buildForm();
    this.loadActors();
    this.loadCompanies();

    if(this._router.url === Constants.ROUTE_MOVIES_ADD){ //ADD MOVIE

      this.isUpdate = false;
      this.movie = {} as Movie;
      this._toolbarService.setToolbarText(Constants.ADD_MOVIE);

    }else{ //UPDATE MOVIE

      this.isUpdate = true;
      const movieId = this._activatedRoute.snapshot.paramMap.get(Constants.ROUTE_PARAM_ID) ?? Constants.ZERO.toString();
      
      this._moviesService.getMovieById(movieId)
        .subscribe({
          next:(response: MovieDto) => {
            
            this.movieDto = response;

            this._toolbarService.setToolbarText(Constants.EDIT_MOVIE + this.movieDto.title );

            this.movieActors = this.actorsList?.filter((actor: ActorDto) => {
              return this.movieDto.actors.includes(actor.id);
            })

            this.movieCompany = this.companiesList?.find((company: CompanyDto) => {
              return company.movies?.includes(this.movieDto.id!);
            })!;

            this.movie = this._dataService.movieBuilder(this.movieDto, this.movieActors, this.movieCompany, []); 

          },
          error: (errorResponse: HttpErrorResponse) => {
            console.error('ERROR: ',errorResponse.error);
            this._navigationService.getErrorPage();
          }
        })
    }
  }

  public buildForm(): void {
    this.movieForm = this._formBuilder.group({
      title   : ['',[Validators.required], ],
      urlImage: ['',[Validators.pattern(this.urlPattern)]], 
      genres  : this._formBuilder.array([]),
      actors  : this._formBuilder.array([]),
      company : [''],
      year    : ['',[Validators.required, Validators.min(1895), Validators.max(new Date().getFullYear())]],
      duration: ['',[Validators.required, Validators.min(0), Validators.max(1260)]],
      rating  : ['',[Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }
  
  public get genresArray(): FormArray {
    return this.movieForm.get('genres') as FormArray;
  }

  public genreControl: FormControl = this._formBuilder.control('');

  public addGenre(): void {
    this.genresArray.push(new FormControl(this.genreControl.value));
  }

  public deleteGenre(index: number):void {
    this.genresArray.removeAt(index);
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

  public removeActorChip(actor: ActorDto): void {
    this.movie.actors?.splice(this.movie.actors.indexOf(actor), Constants.ONE);
  }

  public removeCompanyChip(company: CompanyDto): void {
    this.movie.company = {} as CompanyDto;
  }

  public saveMovie(): void {
    console.log(this.movieForm.value);
    // if (this.movieDto.id) {
    //   //UPDATE
    //   this.movieDto = this._dataService.movieDtoBuilder(this.movie);
    //   this._moviesService.updateMovie(this.movieDto)
    //     .subscribe( updatedMovie => {
    //       console.log('RESPUESTA PUT: ', updatedMovie); //TODO -> Actualizar Estudio
    //       console.log('COMPANY: ', this.movieCompany); //TODO -> PRIMERO HABRA QUE BUSCAR LA COMANY ANTERIOR Y ELIMINAR LA PELICULA
    //       this.movieCompany.movies.push(this.movie.id!);
    //       // this._companiesService.updateCompnay(this.movieCompany);
    //       this.showSnackBar(Constants.UPDATE_MOVIE_MESSAGE);
    //       this._navigationService.getBackLocation();
    //     })
    // } else {
    //   //CREATE
    //   this.movieDto = this._dataService.movieDtoBuilder(this.movie);
    //   this._moviesService.addMovie(this.movieDto)
    //     .subscribe( createdMovie => {
    //       console.log('RESPUESTA POST: ', createdMovie); //TODO -> Actualizar Estudio
    //       console.log('COMPANY: ', this.movieCompany);
    //       this.movieCompany.movies.push(this.movie.id!);
    //       // this._companiesService.updateCompnay(this.movieCompany);
    //       this.showSnackBar(Constants.CREATE_MOVIE_MESSAGE);
    //       this._navigationService.getBackLocation();
    //     })
    // }
  }

  public showSnackBar(message: string) {
    this._snackBar.open(message, Constants.MESSAGE_BUTTON_LABEL, {
      duration: Constants.MESSAGE_DURATION,
      panelClass: ['snack-bar-container--custom']
    });
  }

  validateFormField(field: string) {
    return this.movieForm?.controls?.[field]?.errors;
  }

  validateFormUrlField( field: string){
    return this.movieForm.get(field)?.invalid && this.movieForm.get(field)?.touched;
  }


}
