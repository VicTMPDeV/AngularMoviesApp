import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailStudioComponent } from './detail-studio.component';

const routes: Routes = [
  {
    path: '', component: DetailStudioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailStudioRoutingModule { }
