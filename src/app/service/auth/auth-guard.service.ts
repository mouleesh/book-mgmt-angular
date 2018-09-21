import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
  }
  canActivate() {
    if (this.userService.getLoggedUser()) {
      return true;
    } else {
      this.router.navigateByUrl("/");
      return false;
    }
  }
} 
