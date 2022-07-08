//@angular Components
import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MainService } from './services/main.service';
//Featured Service


@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild('sideNav', {static:true}) //Para poder disponer de el en el hook onInit
  public sideNav!: MatSidenav; 
  public sideNavAbailability: boolean = this.sideNavAvailability();
  public isDarkTheme!: boolean;
  public isMobile!: boolean;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';


  constructor(private _mainService: MainService,
              private _location: Location,
              private _observerBP: BreakpointObserver) {}


  ngAfterViewInit() {
    this._observerBP
      .observe(['(max-width: 480px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe( breakpoint => {
        if (breakpoint.matches) {
          this.isMobile = true;
          this.sideNav.mode = 'over';
          this.sideNav.close();
        } else {
          this.isMobile = false;
          this.sideNav.mode = 'side';
          this.sideNav.open();
        }
      });
  }

  public sideNavAvailability(): boolean {
    return (this._mainService.sideNavAvailableForCurrentRoute()) ? true : false;
  }

  public goBack(): void {
    this._location.back();
    this.sideNav.close();
  }


  public mobileBehavior(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    }
  }

  
  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    (() => {
      (this.isDarkTheme)
        ? this.logoImage = '../../../assets/images/logoVictor.png'
        : this.logoImage = '../../../assets/images/logoVictorFilled.png';
    })();
  }

}
