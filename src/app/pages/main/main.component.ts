//@angular Components
import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
//Featured Service

const sideNavUrlAvailable: string[] = ['/','/movies','/actors','/studios']; 

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {


  @ViewChild('sideNav', {static:true}) //Para poder disponer de el en el hook onInit
  public sideNav!: MatSidenav; 
  public routerSubscription!: Subscription;
  public currentUrl!: string;
  public isSideNavAvailable: boolean = JSON.parse(localStorage.getItem('sideNavAvailable')!);
  public isSideNavOpened: boolean = JSON.parse(localStorage.getItem('sideNavOpened')!);
  public isDarkTheme!: boolean;
  public isMobile!: boolean;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';


  constructor(private router: Router,
              public location: Location,
              private observerBP: BreakpointObserver) {}


  ngOnInit(): void {
    this.routerSubscription = this.getSidenavAvailability();
    this.sideNav.close();
  }

  public getSidenavAvailability(): Subscription{
    return this.router.events
    .pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url),
    )
    .subscribe((next) => {
      console.log('NEXT: ', next); // para observar el numero de emisiones
      this.currentUrl = next;
      if (sideNavUrlAvailable.includes(next)) {
        this.isSideNavAvailable = true;
        this.isSideNavOpened = true;
        console.log(this.isSideNavAvailable);
      } else {
        this.sideNav.close(); //añado un efecto colateral al mostrar el icono
        this.isSideNavAvailable = false;
        this.isSideNavOpened = false;
        console.log(this.isSideNavAvailable);
      }
      localStorage.setItem('sideNavAvailable', JSON.stringify(this.isSideNavAvailable));
      localStorage.setItem('sideNavOpened', JSON.stringify(this.sideNav.opened));
    });
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


  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }


}
