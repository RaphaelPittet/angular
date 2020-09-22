import {Component, OnDestroy, OnInit} from '@angular/core';
import { User} from '../../model/User.model';
import { Subscription } from 'rxjs';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  userSubscritpion: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userSubscritpion = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emiteUsers();
    console.log(this.users);
  }
  ngOnDestroy(): void {
    this.userSubscritpion.unsubscribe();
  }

}
