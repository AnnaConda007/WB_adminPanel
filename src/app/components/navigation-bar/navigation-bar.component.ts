import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatSidenavModule, DashboardComponent], // Замените MatMenuModule на MatSidenavModule
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'] // Исправьте опечатку: styleUrl -> styleUrls
})
export class NavigationBarComponent {
  navigationsItems: NavigationItem[] = [
    { path: 'products', label: 'Товары' },
    { path: 'users', label: 'Пользователи' },
    { path: 'finance', label: 'Финансы' },
    { path: 'analytics', label: 'Аналитика' },
    { path: 'reports', label: 'Отчеты' },
  ];

  constructor(private router: Router) {}

  navigate(item: NavigationItem): void {
    this.router.navigateByUrl(`section/${item.path}`);
  }
}

interface NavigationItem {
  path: string;
  label: string;
}
