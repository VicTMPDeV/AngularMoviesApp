import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '@constants/constants';
import { MovieDto } from '@models/movies/dto/movieDto.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  public CONST: typeof Constants = Constants;

  constructor(private _dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public movie: MovieDto) { }

  public delete() {
    this._dialogRef.close(true);
  }

  public close() {
    this._dialogRef.close();
  }
}
