import { Component } from '@angular/core';
import { Constants } from '@constants/constants';
import { NavigationService } from '../../services/navigation-service/navigation.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  public CONST: typeof Constants = Constants;
  
  constructor(private _navigationService: NavigationService) { }

  public goToMoviesPage(): void { 
    this._navigationService.getReloadPage();
  }

}
