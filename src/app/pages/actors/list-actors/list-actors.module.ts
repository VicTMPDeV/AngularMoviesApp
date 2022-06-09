import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActorsRoutingModule } from './list-actors-routing.module';
import { ListActorsComponent } from './list-actors.component';



@NgModule({
  declarations: [
    ListActorsComponent
  ],
  imports: [
    CommonModule,
    ListActorsRoutingModule
  ]
})
export class ListActorsModule { }
