import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';
import { MessageService } from 'primeng/api';
import { toastData } from '../../constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**LoginComponent Class */
export class LoginComponent {


  /**username field */
  private username: string;

  /**password field */
  private password: string;

  constructor( private userService: UserService, private messageService: MessageService, private router:Router) { }

  /**Method trigged while login */
  onLogin(){
    const user = {
      username : this.username,
      password : this.password
    };
    if(this.userService.checkUser(this.username)){
      (this.userService.login(user)) ? this.loginSuccess() :
      this.messageService.add(toastData.loginError);
    } else {
      this.messageService.add(toastData.loginError);
    }
  }

  /**Actions to happen when login is success */
  private loginSuccess() {
    this.messageService.add(toastData.loginSuccess);
    this.router.navigateByUrl("dashboard");
  }
}
