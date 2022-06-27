import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sideNavAvailability$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true); //Estado inicial true -> se muestra

  getSidenavState(): Observable<boolean> {
    return this.sideNavAvailability$.asObservable();
  };

  setSidenavState(visible: boolean): void {
    this.sideNavAvailability$.next(visible);
  }

}
