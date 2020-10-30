import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth : boolean;
  private myToken: number;
  private showModal = false;
  private expireDate = 6000;
  constructor(private router: Router) { }

  public signIn(): void {
    this.myToken = Date.now();
    this.setToken();
    this.isAuth = true;
  }

  public logout(): void {
    this.clearToken();
    this.isAuth = false;
  }

  public tokenState(): boolean {
    return this.showModal;
  }

  private setToken(): void{
    sessionStorage.setItem('myToken', JSON.stringify(this.myToken));
  }

  private clearToken(): void {
    sessionStorage.clear()
  }

  public checkSession(): void {
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
