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
  public routerSubscription!: Subscription;
  public currentUrl!: string;
  public isSideNavAvailable: boolean = JSON.parse(localStorage.getItem('sideNavAvailable')!);
  public isDarkTheme!: boolean;
  public isMobile!: boolean;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';


  constructor(private mainServ: MainService,
              private location: Location,
              private observerBP: BreakpointObserver) {}



 ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  console.log(this.mainServ.getRouter.url);
  console.log(this.mainServ.hideSideNav());
 }



  ngAfterViewInit() {
    this.observerBP
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



  public goBack(): void {
    this.location.back();
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
