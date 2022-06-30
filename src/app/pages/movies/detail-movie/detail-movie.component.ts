import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from '../../main/services/main.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, OnDestroy {

  constructor(private mainService: MainService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

}
