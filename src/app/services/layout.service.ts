import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sideNavState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true); //Estado inicial true -> se muestra

  getSidenavState(): Observable<boolean> {
    return this.sideNavState$.asObservable();
  };

  setSidenavState(visible: boolean): void {
    this.sideNavState$.next(visible);
  }

}
