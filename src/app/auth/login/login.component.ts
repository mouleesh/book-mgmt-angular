import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { toastData } from 'constant';

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
    this.router.navigateByUrl("/en-us/dashboard");
    this.messageService.add(toastData.loginSuccess);
    
  }
}
