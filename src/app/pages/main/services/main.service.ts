import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class MainService {

  private _toolbarText$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private _router: Router,
              private _location: Location,
              private _observerBP: BreakpointObserver){}

  public getCurrentUrl(): Observable<string> {
    return this._router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        map((event: NavigationEnd) => event.url)
      );
  }

  public getBackLocation(): void {
    this._location.back();
  }


  public getResponsiveBehavior(): Observable<any> {
    console.log(this._observerBP);
    return this._observerBP
      .observe(['(max-width: 480px)'])
      .pipe(delay(1), untilDestroyed(this))
  }


  public getToolbarText(): Observable<string> {
    return this._toolbarText$.asObservable();
  }

  public setToolbarText(value: string): void {
    this._toolbarText$.next(value);
  }

}
