import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  providers: [LayoutService],
  encapsulation: ViewEncapsulation.None //VIP -> Propagar estilos generales en lugar de encapsular el componente
})
export class ListMoviesComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.setSidenavState(true);
  }

  public hideSideNav():void {
    this.layoutService.setSidenavState(false);
    console.log('SIDE NAV STATUS: ', this.layoutService);
  }


}
