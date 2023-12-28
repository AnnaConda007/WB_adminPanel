import { Component } from '@angular/core';
import { UsersService, IUsers } from '../../../services/users.service';
import { MatTableModule } from '@angular/material/table';
import { DeliteBtnComponent } from '../../delite-btn/delite-btn.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatTableModule, DeliteBtnComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css', '../../home/home.component.css'],
})
export class UsersComponent {
  usersList!: IUsers[];
  displayedColumns: string[] = [
    'occupation',
    'login',
    'name',
    'city',
    'rating',
    'id',
  ];
  dataSource: IUsers[] = [];

  constructor(private users: UsersService) {
    this.usersList = this.users.userList;
    this.dataSource = this.usersList;
  }
}
