import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { NavigationService } from '@services/navigation-service/navigation.service';
import { ResponsiveService } from '@services/responsive-service/responsive.service';
import { Constants } from './constants/constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  
  @ViewChild('sideNav', {static:true}) //Para poder disponer de el en el hook onInit
  public sideNav!: MatSidenav; 
  public routerSubscription!: Subscription;
  private readonly urlSideNavAvailable: string[] = ['/','/movies','/actors','/companies']; 
  public isSideNavAvailable: boolean = JSON.parse(localStorage.getItem('isSideNavAvailable')!) ?? true;
  public isDarkTheme: boolean = JSON.parse(localStorage.getItem('isDarkTheme')!) ?? false;
  public isMobile!: boolean;
  public logoImage: string = Constants.LOGO_IMAGE_FILLED;

  constructor(private _navigationService: NavigationService,
              private _responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.routerSubscription = this.getSidenavAvailability();
  }

  public getSidenavAvailability(): Subscription{
    return this._navigationService.getCurrentUrl()
      .subscribe((currentUrl: string) => {
        if (this.urlSideNavAvailable.includes(currentUrl)) {
          this.isSideNavAvailable = true;
        } else {
          this.isSideNavAvailable = false;
          this.sideNav.close(); 
        }
        localStorage.setItem('isSideNavAvailable', JSON.stringify(this.isSideNavAvailable));
      });
  }

  ngAfterViewInit(): void {
    this._responsiveService.getResponsiveBehavior()
      .subscribe( breakpoint => {
          if (breakpoint.matches) {
            this.isMobile = true;
            this.sideNav.mode = 'over';
            this.sideNav.close();
          } else {
            this.isMobile = false;
            this.sideNav.mode = 'side';
          }
      });
  }

  public goBack(): void {
    this._navigationService.getBackLocation();
    this.sideNav.close();
  }

  public setMobileBehavior(): void {
    if (this.isMobile) {
      this.sideNav.toggle();
    }
  }

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('isDarkTheme', JSON.stringify(this.isDarkTheme));
    (() => {
      (this.isDarkTheme)
        ? this.logoImage = Constants.LOGO_IMAGE
        : this.logoImage = Constants.LOGO_IMAGE_FILLED
    })();
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

}