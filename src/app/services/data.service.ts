import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  login = 'user';
  password = '123456';
  isAuthorized!: boolean;

  navigationsItems: NavigationItem[] = [
    { path: 'products', label: 'Товары' },
    { path: 'users', label: 'Пользователи' },
    { path: 'finance', label: 'Финансы' },
    { path: 'analytics', label: 'Аналитика' },
    { path: 'reports', label: 'Отчеты' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    //  "???""
    if (isPlatformBrowser(this.platformId)) {
      this.isAuthorized = !!localStorage.getItem('isAuthorized');
    } else {
      this.isAuthorized = false;
    }
  }
}

interface NavigationItem {
  path: string;
  label: string;
}
