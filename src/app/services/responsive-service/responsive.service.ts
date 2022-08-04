import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor(private _observerBP: BreakpointObserver) { }

  public getResponsiveBehavior(): Observable<any> {
    return this._observerBP
      .observe(['(max-width: 480px)'])
      .pipe(delay(1), untilDestroyed(this))
  }
  
}
