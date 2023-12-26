import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationBarComponent],
  templateUrl: './home.component.html',
  styleUrls:[ './home.component.css',]
})
export class HomeComponent {

}
