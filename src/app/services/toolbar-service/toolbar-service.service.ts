import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Constants } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class ToolbarServiceService {

  private _toolbarText$: BehaviorSubject<string> = new BehaviorSubject<string>(Constants.EMPTY_VALUE);

  public getToolbarText(): Observable<string> {
    return this._toolbarText$.asObservable();
  }

  public setToolbarText(value: string): void {
    this._toolbarText$.next(value);
  }
  
}
