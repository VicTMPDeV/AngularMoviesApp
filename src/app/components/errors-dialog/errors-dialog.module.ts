import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorsDialogComponent } from '@components/errors-dialog/errors-dialog.component';


@NgModule({
  declarations: [
    ErrorsDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule.forChild()
  ],
  exports: [
    ErrorsDialogComponent
  ]
})
export class ErrorDialogModule { }
