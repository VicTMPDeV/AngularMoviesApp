import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // private sideNavAvailability$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  // getObservableSidenavState(): Observable<boolean> {
  //   return this.sideNavAvailability$.asObservable();
  // };

  // setSidenavState(visible: boolean): void {
  //   this.sideNavAvailability$.next(visible);
  // }

}
