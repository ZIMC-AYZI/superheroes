import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean;
  private myToken: number;
  private expireDate = 10000;
  private sessionEnd = true;

  public signIn(): void {
    this.myToken = Date.now();
    this.setToken();
    this.isAuth = true;
  }

  public logout(): void {
    this.clearToken();
    this.isAuth = false;
  }

  stateSessionForGuard(state) {
    this.sessionEnd = state;
  }
  getSessionEnd() {
    return this.sessionEnd
  }


  getAuthState() {
    return this.isAuth
  }

  private setToken(): void {
    sessionStorage.setItem('myToken', JSON.stringify(this.myToken));
  }

  private clearToken(): void {
    sessionStorage.clear()
  }

  public checkSession(): void {
    if (sessionStorage.getItem('myToken')) {
      const loginTime = JSON.parse(sessionStorage.getItem('myToken'));
      const currentDate = Date.now();
      const userSession = currentDate - loginTime;
      if (userSession >= this.expireDate) {
        this.logout();
        localStorage.removeItem('recent-search');
        localStorage.removeItem('fight-data');
        localStorage.removeItem('power-ups');
        localStorage.removeItem('all-heroes');
        localStorage.removeItem('fight-hero');
        localStorage.removeItem('user-hero');
      }
    } else console.log('войдите')
  }
}
