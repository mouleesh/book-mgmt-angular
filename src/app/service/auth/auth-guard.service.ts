import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { UserService } from '../user/user.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private userService: UserService, private router: Router) {
  }
  canActivate() {
    if (this.userService.getLoggedUser()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  canLoad() {
    if (this.userService.getLoggedUser()) {
      return true;
    } else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
} 
