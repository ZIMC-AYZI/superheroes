import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth : boolean;
  myToken: any;
  showModal: boolean = false;
  expireDate: number = 20000;
  constructor() { }

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
        console.log('сеанс окончен')
        this.logout();
        this.showModal = true;
      }
    } else console.log('войдите')
  }
}
