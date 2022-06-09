import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudiosRoutingModule } from './list-studios-routing.module';
import { ListStudiosComponent } from './list-studios.component';


@NgModule({
  declarations: [
    ListStudiosComponent
  ],
  imports: [
    CommonModule,
    ListStudiosRoutingModule
  ]
})
export class ListStudiosModule { }
