import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ReportsComponent } from '../sections/reports/reports.component';
import { ProductsComponent } from '../sections/products/products.component';
import { UsersComponent } from '../sections/users/users.component';
import { FinanceComponent } from '../sections/finance/finance.component';
import { AnalyticsComponent } from '../sections/analytics/analytics.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReportsComponent, CommonModule,ProductsComponent,UsersComponent, FinanceComponent, AnalyticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  currentRoute: string = this.router.url;

  constructor(private router: Router) {}

  ngOnInit() {
    // аналог useEffect(() => {}, [])
    this.router.events.subscribe((event) => {
      // подписка на ВСЕ события маршрутизации
      if (event instanceof NavigationEnd) {
        // окончание загрузки компонента
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
}
