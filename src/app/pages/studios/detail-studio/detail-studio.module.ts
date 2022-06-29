//@angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Featured Modules
import { DetailStudioComponent } from './detail-studio.component';
import { DetailStudioRoutingModule } from './detail-studio-routing.module';


@NgModule({
  declarations: [
    DetailStudioComponent
  ],
  imports: [
    CommonModule,
    DetailStudioRoutingModule
  ]
})
export class DetailStudioModule { }
