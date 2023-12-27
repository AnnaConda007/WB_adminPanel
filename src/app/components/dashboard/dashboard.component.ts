import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
import { ProductsComponent } from '../sections/products/products.component'; 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [  CommonModule,ProductsComponent, RouterModule],
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
