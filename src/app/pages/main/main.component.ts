//@angular Components
import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs/operators';
//Featured Service
import { MainService } from './services/main.service';
import { Observable, of } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('sideNav', {static:true}) //Para poder disponer de el en el hook onInit
  public sideNav!: MatSidenav; //Creare un Observable entorno a esta variable para comunicar entre componentes
  public sideNavAvailable: boolean = false;
  public isDarkTheme: boolean = false;
  public isMobile: boolean = false;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';

  constructor(private router: Router,
              private mainService: MainService,
              public location: Location,
              private observerBP: BreakpointObserver) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.observerBP
      .observe(['(max-width: 480px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe( breakpoint => {
        if (breakpoint.matches) {
          this.sideNav.mode = 'over';
          this.sideNav.close();
          this.isMobile = true;
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open();
          this.isMobile = false;
        }
      });
  }

  public goBack(): void{
    this.location.back();
    this.sideNav.open();
  }

  // public sideNavMobileBehavior(): void {
  //   if (this.isMobile) {
  //     this.sideNav.toggle();
  //   }
  // }

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    (() => {
      (this.isDarkTheme)
        ? this.logoImage = '../../../assets/images/logoVictor.png'
        : this.logoImage = '../../../assets/images/logoVictorFilled.png';
    })();
  }

}
