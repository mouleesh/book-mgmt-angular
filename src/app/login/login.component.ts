import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { MessageService } from 'primeng/api';
import { toastData } from '../../constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;

  private password: string;

  constructor( private userService: UserService, private messageService: MessageService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(){
    const user = {
      username : this.username,
      password : this.password
    };
    if(this.userService.checkUser(this.username)){
      (this.userService.login(user)) ? this.loginSuccess() :
      this.messageService.add(toastData.loginError);;
    } else {
      this.messageService.add(toastData.loginError);
    }
  }


  private loginSuccess() {
    this.messageService.add(toastData.loginSuccess);
    this.router.navigateByUrl("dashboard")
  }
}
