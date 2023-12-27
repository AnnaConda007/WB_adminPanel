import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ReportsComponent } from '../reports/reports.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReportsComponent, CommonModule],
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
