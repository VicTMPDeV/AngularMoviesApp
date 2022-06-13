import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private showSideNav$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  getSidenavVisibility(): Observable<boolean> {
    // this.showSideNav$.subscribe()
    return this.showSideNav$.asObservable();
  };

  setSidenavVisibility(visibility: boolean): void {
    this.showSideNav$.next(visibility);
  }

}
