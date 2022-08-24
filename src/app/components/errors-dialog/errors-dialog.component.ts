import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Constants } from '@constants/constants';

@Component({
  selector: 'app-errors-dialog',
  templateUrl: './errors-dialog.component.html',
  styleUrls: ['./errors-dialog.component.scss']
})
export class ErrorsDialogComponent {

  public CONST: typeof Constants = Constants;

  constructor(private _dialogRef: MatDialogRef<ErrorsDialogComponent>) { }

  public close() {
    this._dialogRef.close();
  }
}
