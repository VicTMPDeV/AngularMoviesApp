//@angular Components
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
//Featured Service
import { NavigationService } from './services/navigation-service/navigation.service';
import { ResponsiveService } from './services/responsive-service/responsive.service';


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
  public isDarkTheme!: boolean;
  public isMobile!: boolean;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';


  constructor(private _navigationService: NavigationService,
              private _responsiveService: ResponsiveService) {}

  ngOnInit(): void {
    this.routerSubscription = this.getSidenavAvailability();
  }

  public getSidenavAvailability(): Subscription{
    return this._navigationService.getCurrentUrl()
      .subscribe((currentUrl: string) => {
        console.log('NEXT: ', currentUrl);
        if (this.urlSideNavAvailable.includes(currentUrl)) {
          this.isSideNavAvailable = true;
        } else {
          this.isSideNavAvailable = false;
          this.sideNav.close(); //añado un efecto colateral al mostrar el icono
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