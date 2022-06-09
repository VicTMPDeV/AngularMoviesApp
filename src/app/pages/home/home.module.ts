//@angular Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//@angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
//Featured Components
import { HomeComponent } from './home-component.component';
//Featured Modules
import { HomeModuleRoutingModule } from './home-module-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeModuleRoutingModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule
  ]
})
export class HomeModule { }
