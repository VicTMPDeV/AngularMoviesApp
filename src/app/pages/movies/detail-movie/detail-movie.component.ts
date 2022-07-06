import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from '../models/movie.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public movie!: Movie;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.moviesService.getMovieById(id) )
      )
      .subscribe( movieResp => this.movie = movieResp );

  }

}
