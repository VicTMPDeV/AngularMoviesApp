import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movieForm: FormGroup = new FormGroup({

  });
  
  constructor() { }

  ngOnInit(): void {
  }

    //TODO -> Objeto MovieMapped -> Si está vacío es una pelicula nueva, sino es edición

  //TODO2 -> Además me tengo que traer todos los actores y estudios para el combo del formulario

}
