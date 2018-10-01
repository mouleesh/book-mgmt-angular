import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  private fullname: string;
  private username: string = null;
  /**subcription to store the observable subscription*/
  subscription: Subscription;
  constructor(private userService: UserService) {
    this.subscription = this.userService.userLogged.subscribe((username) => {
      this.username = username;
      this.fullname = this.userService.getFullName(this.username);
    });
   }

  ngOnInit() {
    this.fullname = this.userService.getUserDetails();
    console.log(this.fullname);
  }

}
