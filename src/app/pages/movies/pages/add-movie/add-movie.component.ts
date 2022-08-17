import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Genre } from '@models/movies/movie.interface';


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

  movieForm: FormGroup = new FormGroup({

  });
  
  constructor() { }

  ngOnInit(): void {

  }

    //TODO -> Objeto MovieMapped -> Si está vacío es una pelicula nueva, sino es edición

  //TODO2 -> Además me tengo que traer todos los actores y estudios para el combo del formulario

}
