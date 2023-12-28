import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAuth!: boolean;

  constructor(private data: DataService, private router: Router) {
    this.isAuth = data.isAuthorized;
  }

  logOut() {
    this.data.isAuthorized = false;
    localStorage.setItem('isAuthorized', '');
    this.router.navigateByUrl(`auth`);
    this.isAuth = false;
  }
}
