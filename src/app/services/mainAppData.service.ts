import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  login = 'user';
  password = '123456';
  authorized = new BehaviorSubject(false);

  navigationsItems: NavigationItem[] = [
    { path: 'products', label: 'Товары' },
    { path: 'users', label: 'Пользователи' },
    { path: 'finance', label: 'Финансы' },
    { path: 'analytics', label: 'Аналитика' },
    { path: 'reports', label: 'Отчеты' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const isAuth = !!localStorage.getItem('isAuthorized');
      this.authorized.next(isAuth);
    }
  }
  get isAuthorized() {
    return this.authorized.asObservable();
  }

  setAuthorization(value: boolean) {
    this.authorized.next(value);
    localStorage.setItem('isAuthorized', value ? 'true' : '');
  }
}

interface NavigationItem {
  path: string;
  label: string;
}
