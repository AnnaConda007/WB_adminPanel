// navigation-btn.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation-btn',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './navigation-btn.component.html',
  styleUrls: ['./navigation-btn.component.css']
})
export class NavigationBtnComponent {
  @Input() navigationsItems: NavigationItem[] = [];  
  
  constructor(private router: Router) {}

  navigate(item: NavigationItem): void {
    this.router.navigateByUrl(`section/${item.path}`);
  }

}

interface NavigationItem {
  path: string;
  label: string;
}
