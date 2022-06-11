//@angular Components
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;

  isDarkTheme: boolean = false;

  isMobile: boolean = false;

  logoImage: string = '../../../assets/images/logoVictorFilled.png';

  constructor(private observerBP: BreakpointObserver){}

  ngAfterViewInit() {
    this.observerBP.observe(['(max-width: 480px)'])
      .subscribe((resp) => {
        if (resp.matches){
          this.sideNav.mode = 'over';
          this.sideNav.close();
          this.isMobile = true;
        }else{
          this.sideNav.mode = 'side';
          this.sideNav.open();
          this.isMobile = false;
        }
      });
  }

  toggleTheme(): void {

    //TODO implementar @input para pasarselo a home que es hijo
    this.isDarkTheme = !this.isDarkTheme;

    (() => {
      (this.isDarkTheme)
      ? this.logoImage = '../../../assets/images/logoVictor.png'
      : this.logoImage = '../../../assets/images/logoVictorFilled.png';
    })();

  }

  toggleSideNav(): void {
    if(this.isMobile){
      this.sideNav.toggle();
    }
  }

  iconChange(): string{
    return (this.isDarkTheme) ? 'bedtime' : 'light_mode';
  }
}
