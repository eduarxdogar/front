// usertable.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../data/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usertable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
