import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private readonly sideNavUrlAvailable: string[] = ['/','/movies','/actors','/companies']; 
  private toolbarText$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private router: Router){}

  public get getRouter(): Router{
    return this.router;
  }

  public sideNavAvailableForCurrentRoute(): boolean{
    return this.sideNavUrlAvailable.includes(this.router.url);
  }

  getToolbarText(): Observable<string> {
    return this.toolbarText$.asObservable();
  }

  setToolbarText(value: string): void {
    this.toolbarText$.next(value);
  }

}
