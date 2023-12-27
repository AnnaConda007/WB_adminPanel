import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-home',
  
  standalone: true,
  imports: [NavigationBarComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] ,
})
export class HomeComponent {}
