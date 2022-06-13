import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, OnDestroy {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.setSidenavVisibility(false);
  }

  ngOnDestroy(): void {
    this.menuService.setSidenavVisibility(true);
  }

}
