import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
})
export class AuthorizationComponent {
  login: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router: Router, private dataService: DataService) {}

  validate(): boolean {
    return (
      this.login === this.dataService.login &&
      this.password === this.dataService.password
    );
  }

  onSubmit() {
    if (!this.validate()) {
      this.errorMessage = 'неверный email или пароль';
      return;
    }
    this.dataService.isAuthorized = true;
    localStorage.setItem('isAuthorized', 'true');
    this.router.navigateByUrl(`/section/products`);
  }
}
