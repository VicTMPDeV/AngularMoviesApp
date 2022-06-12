import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, OnDestroy {

  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isActive = true;
    console.log(this.isActive);
  }

  ngOnDestroy(): void {
    this.isActive = false;
    console.log(this.isActive);
  }

}
