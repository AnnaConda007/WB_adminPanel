import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation/navigation-bar/navigation-bar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataService } from '../../services/mainAppData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',

  standalone: true,
  imports: [NavigationBarComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isAuth!: boolean;

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.isAuthorized.subscribe((isAuth) => {
      if (isAuth) return;
      this.router.navigateByUrl(`auth`);
    });
  }
}
