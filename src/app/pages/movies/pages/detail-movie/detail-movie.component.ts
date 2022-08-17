import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Movie } from '@models/movies/movie.interface';
import { ActorsService } from '@services/actors-service/actors.service';
import { CompaniesService } from '@services/companies-service/companies.service';
import { DataBuilderService } from '@services/data-service/data-builder.service';
import { MoviesService } from '@services/movies-service/movies.service';
import { NavigationService } from '@services/navigation-service/navigation.service';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { Constants } from '@constants/constants';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styles: [`
      .edit-button {
        display: flex;
        gap: 15px;
        justify-content: right;
        position: fixed;
        bottom: 2.5vh;
        right: 5vw;
      }
    `]
})
export class DetailMovieComponent implements OnInit {

  public movie!: Movie;

  constructor(private _activatedRoute: ActivatedRoute,
              private _moviesService: MoviesService,
              private _actorsService: ActorsService,
              private _companiesService: CompaniesService,
              private _dataService: DataBuilderService,
              private _navigationService: NavigationService,
              private _toolbarService: ToolbarServiceService,
              private _dialog: MatDialog,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let movieDto: MovieDto = {} as MovieDto;
    let movieActors: ActorDto[] = [];
    let companies: CompanyDto[] = [];

    this._moviesService.getMovieById(this._activatedRoute.snapshot.paramMap.get(Constants.ROUTE_PARAM_ID)!) 
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
              this.movie = this._dataService.movieBuilder(movieDto, movieActors, companies); 
              this._toolbarService.setToolbarText(`${this.movie.title} (${this.movie.year})`);
            });
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.error('ERROR: ',errorResponse.error);
          this._navigationService.getErrorPage();
        }
      })
  }

  public deleteMovie(): void {

    const dialog = this._dialog.open(ConfirmDialogComponent, {
      width: Constants.DELETE_DIALOG_WIDTH,
      data: {...this.movie}
    });

    dialog.afterClosed()
      .subscribe( (result) => {
        if(result){
          this._moviesService.deleteMovie(this.movie.id!)
            .subscribe(()=>{
              this.showSnackBar(Constants.DELETE_MOVIE_MESSAGE);
              this._navigationService.getReloadPage();
            })
        }
      })
  
  }

  showSnackBar( message: string ){
    this._snackBar.open( message, Constants.DELETED_MESSAGE_BUTTON_LABEL, {
      duration: Constants.DELETED_MESSAGE_DURATION
    });
  }

}