import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserService } from '../../service/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {


  username: string = null;
  fullname: string;
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = this.userService.userLogged.subscribe((username) => {
      this.username = username;
      this.fullname = this.userService.getFullName(this.username);
    });
  }

  logOut() {
    this.userService.logOut();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
