import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean;
  myToken: any;
  showModal: boolean = false;
  expireDate: number = 6000;
  constructor(private router: Router) { }

  signIn() {
    this.myToken = Date.now();
    this.setToken();
    this.isAuth = true;
  }

  logout() {
    this.clearToken();
    this.isAuth = false;
  }

  tokenState() {
    return this.showModal;
  }

  private setToken(){
    sessionStorage.setItem('myToken', this.myToken)
  }

  private clearToken() {
    sessionStorage.clear()
  }

  checkSession() {
    if (sessionStorage.getItem('myToken')){
      const loginTime = JSON.parse(sessionStorage.getItem('myToken'));
      const currentDate = Date.now();
      const userSession = currentDate - loginTime;
      if (userSession >= this.expireDate){
        this.router.navigate(['login']);
        console.log('сеанс окончен')
        this.logout();
        this.showModal = true;
        localStorage.removeItem('recent-search');
      }
    } else console.log('войдите')
  }
}
