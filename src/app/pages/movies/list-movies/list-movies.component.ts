import { Component, OnInit, SkipSelf, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  providers: [MenuService],
  encapsulation: ViewEncapsulation.None //VIP -> Propagar estilos generales en lugar de encapsular el componente
})
export class ListMoviesComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

}
