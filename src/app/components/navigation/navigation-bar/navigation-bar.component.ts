import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from '../../dashboard/dashboard.component';
  import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';
  import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
  import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatIconModule,CommonModule, MatButtonModule, MatSidenavModule, DashboardComponent,NavigationBtnComponent],  
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']  
})
 
  export class NavigationBarComponent {
    isMobile: boolean = false;
    showSidenav: boolean = true;  
  
    toggleSidenav() {
      this.showSidenav = !this.showSidenav;
    }
  
    constructor(private breakpointObserver: BreakpointObserver) {
      this.breakpointObserver.observe(Breakpoints.Handset)
        .subscribe(result => {
          this.isMobile = result.matches;
          this.showSidenav = !this.isMobile;  
        });
    }

  navigationsItems: NavigationItem[] = [
    { path: 'products', label: 'Товары' },
    { path: 'users', label: 'Пользователи' },
    { path: 'finance', label: 'Финансы' },
    { path: 'analytics', label: 'Аналитика' },
    { path: 'reports', label: 'Отчеты' },
  ];
 
}

interface NavigationItem {
  path: string;
  label: string;
}
