//@angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Featured Modules
import { DetailActorRoutingModule } from './detail-actor-routing.module';
import { DetailActorComponent } from './detail-actor.component';


@NgModule({
  declarations: [
    DetailActorComponent
  ],
  imports: [
    CommonModule,
    DetailActorRoutingModule
  ]
})
export class DetailActorModule { }
