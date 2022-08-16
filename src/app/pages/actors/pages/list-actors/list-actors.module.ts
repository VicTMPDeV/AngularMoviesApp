import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '@components/spinner/spinner.module';
import { ListActorsRoutingModule } from '@pages/actors/pages/list-actors/list-actors-routing.module';
import { ListActorsComponent } from '@pages/actors/pages/list-actors/list-actors.component';
import { ActorsService } from '@services/actors-service/actors.service';


@NgModule({
  declarations: [
    ListActorsComponent
  ],
  imports: [
    CommonModule,
    ListActorsRoutingModule,
    SpinnerModule
  ],
  providers: [
    ActorsService
  ]
})
export class ListActorsModule { }
