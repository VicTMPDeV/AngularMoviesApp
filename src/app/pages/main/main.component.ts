//@angular Components
import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @ViewChild(MatSidenav, {static:true})
  sideNavigator!: MatSidenav;

  sideNavVisibility: boolean = true;
  isDarkTheme: boolean = false;
  isMobile: boolean = false;
  logoImage: string = '../../../assets/images/logoVictorFilled.png';

  constructor(private observerBP: BreakpointObserver, 
              private router: Router,
              private menuService: MenuService,
              public location: Location ) { }

  ngOnInit(): void {
    this.menuService.getSidenavVisibility()
        .subscribe(visibility => this.sideNavVisibility = visibility);
  }


  ngAfterViewInit() {
    this.observerBP
      .observe(['(max-width: 480px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((resp) => {
        if (resp.matches) {
          this.sideNavigator.mode = 'over';
          this.sideNavigator.close();
          this.isMobile = true;
        } else {
          this.sideNavigator.mode = 'side';
          this.sideNavigator.open();
          this.isMobile = false;
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sideNavigator.mode === 'over') {
          this.sideNavigator.close();
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
      this.sideNavigator.toggle();
    }
  }

  iconChange(): string {
    return (this.isDarkTheme) ? 'bedtime' : 'light_mode';
  }

}
