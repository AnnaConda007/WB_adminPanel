import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAuth!: boolean;
  authSubscription!: Subscription;

  constructor(private dataService: DataService, private router: Router) {
    this.authSubscription = this.dataService.isAuthorized.subscribe(
      (isAuth) => {
        this.isAuth = isAuth;
      }
    );
  }

  logOut() {
    this.dataService.setAuthorization(false);
    this.router.navigateByUrl(`auth`);
  }
}
