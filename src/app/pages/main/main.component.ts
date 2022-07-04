//@angular Components
import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter, map } from 'rxjs/operators';
//Featured Service
import { MainService } from './services/main.service';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild('sideNav', {static:true}) //Para poder disponer de el en el hook onInit
  public sideNav!: MatSidenav; 
  public currentPage: string = '';
  public isDarkTheme: boolean = false;
  public isMobile: boolean = false;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';

  constructor(private router: Router,
              private mainService: MainService,
              public location: Location,
              private observerBP: BreakpointObserver) { 
              
                this.getCurrentPageSlug(); 
              
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

  private getCurrentPageSlug(){
    this.router.events
    .pipe(
      filter((event: any) => event instanceof ActivationEnd && event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.routeConfig),
    )
    .subscribe((data) => {
      this.currentPage = data!.path || '';
    });
  }

  public showBackIcon(): boolean {
    let show: boolean = false;
    if (this.currentPage !== '') {
      show = true;
      this.sideNav.close(); //añado un efecto colateral al mostrar el icono
    } else {
      show = false;
    }
    return show;
  }

  public goBack(): void{
    this.location.back();
    this.sideNav.open();
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
