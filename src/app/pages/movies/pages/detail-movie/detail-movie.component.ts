import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Constants } from '@constants/constants';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { ActorDto } from '@models/actors/dto/actorDto.interface';
import { CompanyDto } from '@models/companies/dto/companyDto.interface';
import { MovieDto } from '@models/movies/dto/movieDto.interface';
import { Movie } from '@models/movies/movie.interface';
import { ActorsService } from '@services/actors-service/actors.service';
import { CompaniesService } from '@services/companies-service/companies.service';
import { DataService } from '@services/data-service/data.service';
import { MoviesService } from '@services/movies-service/movies.service';
import { NavigationService } from '@services/navigation-service/navigation.service';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';


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

  public movieDetail!: Movie;
  
  public movieDto: MovieDto = {} as MovieDto;
  public movieActorDtoList: ActorDto[] = [];
  public movieCompanyDto: CompanyDto = {} as CompanyDto;
  public companyDtoList: CompanyDto[] = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _moviesService: MoviesService,
              private _actorsService: ActorsService,
              private _companiesService: CompaniesService,
              private _dataService: DataService,
              private _navigationService: NavigationService,
              private _toolbarService: ToolbarServiceService,
              private _dialog: MatDialog,
              private _snackBar: MatSnackBar,
              private _translate: TranslateService) { }

  ngOnInit(): void {

    this._moviesService.getMovieById(this._activatedRoute.snapshot.paramMap.get(Constants.ROUTE_PARAM_ID)!) 
      .subscribe( {
        next: (movieResponse: MovieDto) => {

          this.movieDto = movieResponse;

          this._toolbarService.setToolbarText(`${this.movieDto.title} (${this.movieDto.year})`);

          this.movieDto.actors.forEach( (actorId: number) => {
            this._actorsService.getActorById(actorId)
              .subscribe((actorDtoResponse: ActorDto) => {
                this.movieActorDtoList.push(actorDtoResponse);
              });
          });

          this._companiesService.getCompanies()
            .subscribe((companiesResp: CompanyDto[]) => {
              this.companyDtoList = companiesResp;
              const company = companiesResp.find((company: CompanyDto) => {
                return company.movies?.includes(this.movieDto.id!);
              });
              this.movieCompanyDto = company!;
              this.movieDetail = this._dataService.movieBuilder(this.movieDto, this.movieActorDtoList, this.movieCompanyDto); 
            });
        },
        error: (errorResponse: HttpErrorResponse) => {
          console.error(Constants.ERROR, errorResponse.error);
          this._navigationService.getErrorPage();
        }
      })
  }

  public deleteMovie(): void {

    const dialog = this._dialog.open(ConfirmDialogComponent, {
      width: Constants.DIALOG_WIDTH,
      data: {...this.movieDetail}
    });

    dialog.afterClosed()
      .subscribe( (result) => {
        if(result){
          this._moviesService.deleteMovie(this.movieDetail.id!)
            .subscribe(() => {
              this.movieCompanyDto.movies.splice(this.movieCompanyDto?.movies.indexOf(this.movieDetail.id!), Constants.ONE);
              this._companiesService.updateCompany(this.movieCompanyDto!).subscribe();
              this.showSnackBar(this._translate.instant(Constants.DELETED_MOVIE_MESSAGE));
              this._navigationService.getListMoviesPage();
            })
        }
      })
  
  }

  public showSnackBar( message: string ){
    this._snackBar.open( message, this._translate.instant(Constants.MESSAGE_BUTTON_LABEL), {
      duration: Constants.MESSAGE_DURATION
    });
  }

}