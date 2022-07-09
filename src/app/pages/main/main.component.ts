//@angular Components
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
//Featured Service
import { MainService } from './services/main.service';


@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('sideNav', {static:true}) //Para poder disponer de el en el hook onInit
  public sideNav!: MatSidenav; 
  private readonly urlSideNavAvailable: string[] = ['/','/movies','/actors','/companies']; 
  public routerSubscription!: Subscription;
  public currentUrl!: string;
  public isSideNavAvailable: boolean = JSON.parse(localStorage.getItem('isSideNavAvailable')!);
  public isDarkTheme!: boolean;
  public isMobile!: boolean;
  public logoImage: string = '../../../assets/images/logoVictorFilled.png';


  constructor(private _mainService: MainService) {}

  ngOnInit(): void {
    this.routerSubscription = this.getSidenavAvailability();
  }

  public getSidenavAvailability(): Subscription{
    return this._mainService.getCurrentUrl()
      .subscribe((next: string) => {
        console.log('NEXT: ', next); // para observar el numero de emisiones
        this.currentUrl = next;
        if (this.urlSideNavAvailable.includes(next)) {
          this.isSideNavAvailable = true;
        } else {
          this.isSideNavAvailable = false;
          this.sideNav.close(); //añado un efecto colateral al mostrar el icono
        }
        localStorage.setItem('isSideNavAvailable', JSON.stringify(this.isSideNavAvailable));
      });
  }

  
  ngAfterViewInit(): void {
    this._mainService.getResponsiveBehavior()
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
    this._mainService.getBackLocation();
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
