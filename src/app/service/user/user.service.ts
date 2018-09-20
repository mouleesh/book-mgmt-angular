import { Injectable } from '@angular/core';
import { loginDetails, userDetails } from '../../../constant';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private logged : string;

  userLogged = new Subject<string>();

  constructor( private router:Router) {
    this.logged = null;
  }

  public checkUser = (username: string) =>{

    const user = this.getUserArray(username);

    return user.length > 0;
  }


  public login = ({username , password}) => {
    const user = this.getUserArray(username)[0];

    if(user.password === password){
      this.logged = username;
      this.userLogged.next(this.logged);
      return true;
    } else {
      return false;
    }
  } 

  public logOut = () => {
    console.log("logout")
    this.logged = null;
    this.userLogged.next(this.logged);
    this.router.navigateByUrl("/");
  }

  public getLoggedUser = () => {
    return this.logged;
  }

  public getFullName = (username:string)=>{
    let userdetails;
    if(this.checkUser(username)){
      userdetails = userDetails.filter((user) => {
        return user.username === username;
      })[0];

      return userdetails.fullName;
    } else {
      return null;
    }
  }
  private getUserArray(username: string) {
    return loginDetails.filter((user) => {
      return user.username === username;
    });
  }
}
