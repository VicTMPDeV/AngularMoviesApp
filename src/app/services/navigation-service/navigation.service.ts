import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Constants } from '@constants/constants';
import { filter, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private _router: Router,
              private _location: Location){}

  public getCurrentUrl(): Observable<any> {
    return this._router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      );
  }

  public getBackLocation(): void {
    this._location.back();
  }

  public getListMoviesPage(): void{
    this._router.navigateByUrl(Constants.ROUTE_MOVIES);
  }

  public getErrorPage(): void{
    this._router.navigateByUrl(Constants.ROUTE_NOT_FOUND);
  }

}
