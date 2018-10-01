import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../../service/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  /**username field*/
  private username: string = null;
  /**Fullname field*/
  private fullname: string;
  /**subcription to store the observable subscription*/
  subscription: Subscription;

  /**constructor with subscription to username from `UserService` */
  constructor(private userService: UserService) {
    this.subscription = this.userService.userLogged.subscribe((username) => {
      this.username = username;
      this.fullname = this.userService.getFullName(this.username);
    });
  }

  /**function to perform logout */
  logOut() {
    this.userService.logOut();
  }

  /**the sunscription is unsubscribed at when component is destroyed */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
