import { Injectable } from '@angular/core';
import { loginDetails, userDetails } from '../../../constant';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

/** Service for User Related Queries */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private logged: string;

  /**The User `Subject` through which the username after login is Obtained */
  userLogged = new Subject<string>();

  constructor(private router: Router) {
    this.logged = null;
  }

  /**
   * Checks whether a user is present or not.
   * @param username string.
   * @returns boolean
   */
  public checkUser = (username: string) => {
    return this.getUserArray(username).length > 0;
  }

  /**
   * Login function.
   * @param { username: string, password: string}.
   * @returns boolean
   */
  public login = ({ username, password }) => {
    const user = this.getUserArray(username)[0];

    if (user.password === password) {
      this.logged = username;
      this.userLogged.next(this.logged);
      return true;
    } else {
      return false;
    }
  }

  /**
   * LogOut function.
   */
  public logOut = () => {
    console.log("logout")
    this.logged = null;
    this.userLogged.next(this.logged);
    this.router.navigateByUrl("/");
  }

  /**
   * Provides the logged username.
   * @returns string
   */
  public getLoggedUser = () => {
    return this.logged;
  }

  /**
   * Provides the fullName of the user.
   * @param username string.
   * @returns string.
   */
  public getFullName = (username: string) => {
    let userdetails;
    if (this.checkUser(username)) {
      userdetails = userDetails.filter((user) => {
        return user.username.toLowerCase() === username.toLowerCase();
      })[0];  // this is an IE fix

      return userdetails.fullName;
    } else {
      return null;
    }
  }

  /**
   * Returns the user object of username within a `Array`.
   * @param username string.
   * @returns array.
   */
  private getUserArray(username: string) {
    return loginDetails.filter((user) => {
      return user.username === username;
    });
  }
}
