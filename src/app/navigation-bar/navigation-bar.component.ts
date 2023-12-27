import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css',
})
export class NavigationBarComponent {
  navigationsItems: NavigationItem[] = [
    { path: 'reports', label: 'Отчеты' },
    { path: 'tasks', label: 'Задачи' },
  ];

  constructor(private router: Router) {}

  navigate(item: NavigationItem): void {
    this.router.navigateByUrl(`/${item.path}`);
  }
}

interface NavigationItem {
  path: string;
  label: string;
}
