//@angular Components
import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;

  isDarkTheme: boolean = false;
  isMobile: boolean = false;
  logoImage: string = '../../../assets/images/logoVictorFilled.png';

  constructor(private observerBP: BreakpointObserver, private router: Router) { }

  ngAfterViewInit() {
    this.observerBP
      .observe(['(max-width: 480px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((resp) => {
        if (resp.matches) {
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

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    (() => {
      (this.isDarkTheme)
        ? this.logoImage = '../../../assets/images/logoVictor.png'
        : this.logoImage = '../../../assets/images/logoVictorFilled.png';
    })();
  }

  toggleSideNav(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    }
  }

  iconChange(): string {
    return (this.isDarkTheme) ? 'bedtime' : 'light_mode';
  }

}
