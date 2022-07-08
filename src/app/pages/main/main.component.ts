//@angular Components
import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';
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
  private readonly urlSideNavAvailable: string[] = ['/','/movies','/actors','/companies']; 
  public routerSubscription: Subscription = this.getSidenavAvailability();
  public currentUrl!: string;
  public isSideNavAvailable: boolean = JSON.parse(localStorage.getItem('sideNavAvailable')!);
  public isDarkTheme!: boolean;
  public isMobile!: boolean;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';


  constructor(private _router: Router,
              private _location: Location,
              private _observerBP: BreakpointObserver) {}



  public getSidenavAvailability(): Subscription{
    return this._router.events
    .pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url),
    )
    .subscribe((next) => {
      console.log('NEXT: ', next); // para observar el numero de emisiones
      this.currentUrl = next;
      if (this.urlSideNavAvailable.includes(next)) {
        this.isSideNavAvailable = true;
      } else {
        console.log('entro aqui');
        this.isSideNavAvailable = false;
        this.sideNav.close(); //añado un efecto colateral al mostrar el icono
      }
      localStorage.setItem('sideNavAvailable', JSON.stringify(this.isSideNavAvailable));
    });
  }

  
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

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

}
