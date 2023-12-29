import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../../services/mainAppData.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    DashboardComponent,
    NavigationBtnComponent,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  isMobile: boolean = false;
  showSidenav: boolean = true;
  navigationsItems;
  toggleSidenav() {
    if (!this.isMobile) return;
    this.showSidenav = !this.showSidenav;
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dataService: DataService
  ) {
    this.navigationsItems = this.dataService.navigationsItems;
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
      this.showSidenav = !this.isMobile;
    });
  }
}
