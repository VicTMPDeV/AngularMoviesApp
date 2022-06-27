import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, OnDestroy {

  constructor(private menuService: LayoutService) { }

  ngOnInit(): void {
    this.menuService.setSidenavState(false);
  }

  ngOnDestroy(): void {
    this.menuService.setSidenavState(true);
  }

}
