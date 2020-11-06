import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {myRoutes} from "../routes/routes";
import {MyToastrService} from "./my-toastr.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private myToastrService: MyToastrService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.getAuthState()) {
      return true
    } else {
      this.router.navigate([myRoutes.logIn.routerPath]);
      this.myToastrService.createMessage(
        'Сделайте авторизацию',
        'Для перехода',
        2000,
        'toast-top-center'
      );
      return false
    }
  }

}
