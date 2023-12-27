import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from '../../dashboard/dashboard.component';
  import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';


@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSidenavModule, DashboardComponent,NavigationBtnComponent],  
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']  
})
export class NavigationBarComponent {
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
