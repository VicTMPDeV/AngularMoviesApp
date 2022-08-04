import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarServiceService {

  private _toolbarText$: BehaviorSubject<string> = new BehaviorSubject<string>(''); 
  
  constructor() { }

  public getToolbarText(): Observable<string> {
    return this._toolbarText$.asObservable();
  }

  public setToolbarText(value: string): void {
    this._toolbarText$.next(value);
  }
  
}
