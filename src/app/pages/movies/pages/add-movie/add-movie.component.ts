import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Genre } from '@models/movies/movie.interface';
import { Movie } from '@models/movies/movie.interface';
import { ToolbarServiceService } from '@services/toolbar-service/toolbar-service.service';
import { Constants } from '@constants/constants';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  encapsulation: ViewEncapsulation.None //Añadido para poder modificar el estilo del panel que aparecía transparente
})
export class AddMovieComponent implements OnInit {

  public genres = Object.values(Genre);

  public actors = [
    {
      first_name: 'Isaak',
      last_name: 'McQuode'
    },
    {
      first_name: 'Rory',
      last_name: 'Chanders'
    },
    {
      first_name: 'Lew',
      last_name: 'Meehan'
    }
  ] 

  public companies = [
    {
      name: 'Jacobson-Dickinson'
    },
    {
      name: 'Quitzon-Erdman'
    },
    {
      name: 'Hane, Metz and Morar'
    }
  ]

  public movie: Movie = {} as Movie;

  movieForm: FormGroup = new FormGroup({

  });
  
  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _toolbarService: ToolbarServiceService) { }

  ngOnInit(): void {

    if(this._router.url === Constants.ROUTE_MOVIES_ADD){
      this._toolbarService.setToolbarText(Constants.ADD_MOVIE);
    }else{
      this._toolbarService.setToolbarText(Constants.EDIT_MOVIE 
        + this._activatedRoute.snapshot.paramMap.get(Constants.ROUTE_PARAM_ID)!);
    }
  }

  public saveMovie(): void {
    console.log(this.movie);
  }

    //TODO -> Objeto MovieMapped -> Si está vacío es una pelicula nueva, sino es edición

  //TODO2 -> Además me tengo que traer todos los actores y estudios para el combo del formulario

}
