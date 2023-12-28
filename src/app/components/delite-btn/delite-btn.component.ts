import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delite-btn',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './delite-btn.component.html',
  styleUrl: './delite-btn.component.css',
})
export class DeliteBtnComponent {}
