import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { Constants } from '@constants/constants';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _toolbarText$: BehaviorSubject<string> = new BehaviorSubject<string>('');

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

  public getReloadPage(): void{
    this._router.navigateByUrl(Constants.ROUTE_MOVIES);
  }

  public getErrorPage(): void{
    this._router.navigateByUrl(Constants.ROUTE_NOT_FOUND);
  }

  public getToolbarText(): Observable<string> {
    return this._toolbarText$.asObservable();
  }

  public setToolbarText(value: string): void {
    this._toolbarText$.next(value);
  }

}
