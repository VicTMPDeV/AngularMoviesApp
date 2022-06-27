//@angular Components
import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { delay, filter } from 'rxjs/operators';
//Featured Service
import { LayoutService } from '../../services/layout.service';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild
  ('sideNav', {static:true}) //Para poder disponer de el en el hook onInit

  public sideNav!: MatSidenav;
  public sideNavVisible: boolean = true;
  public isDarkTheme: boolean = false;
  public isMobile: boolean = false;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';

  constructor(private observerBP: BreakpointObserver, 
              private router: Router,
              private layoutService: LayoutService,
              public location: Location) { }

  ngOnInit(): void {
    this.layoutService.getSidenavState()
        .subscribe(visibility => this.sideNavVisible = visibility);
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

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sideNav.mode === 'over') {
          this.sideNav.close();
        }
      });
  }

  public goBack(){
    this.location.back();
    this.sideNav.toggle();
  }

  public sideNavMobileBehavior(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    }
  }

  // LIGHT / DARK Theme 
  public changeIconTheme(): string {
    return (this.isDarkTheme) ? 'bedtime' : 'light_mode';
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
