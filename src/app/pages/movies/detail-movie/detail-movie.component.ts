import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ActorsService } from '../../actors/actors.service';
import { MovieDto } from '../models/dto/movieDto.interface';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  public movie!: MovieDto;

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private actorsService: ActorsService) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.moviesService.getMovieById(id) )
      )
      .subscribe( (movieResp: MovieDto) => this.movie = movieResp );

  }

}
