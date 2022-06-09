import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-studios',
  templateUrl: './list-studios.component.html',
  styleUrls: ['./list-studios.component.scss'],
  encapsulation: ViewEncapsulation.None //VIP -> Propagar estilos generales en lugar de encapsular el componente
})
export class ListStudiosComponent {}
