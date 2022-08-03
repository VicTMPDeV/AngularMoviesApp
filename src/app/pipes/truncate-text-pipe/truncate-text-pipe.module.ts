import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateTextPipe } from "@pipes/truncate-text-pipe/truncate-text-pipe.pipe";


@NgModule({
  declarations: [
    TruncateTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncateTextPipe
  ]
})
export class TruncateTextPipeModule { }
