import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private toolbarText$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  getToolbarText(): Observable<string> {
    return this.toolbarText$.asObservable();
  }

  setToolbarText(value: string): void {
    this.toolbarText$.next(value);
  }

}
