import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {myRoutes} from "../routes/routes";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.getAuthState()) {
      return true
    } else {
      this.router.navigate([myRoutes.logIn.routerPath]);
      this.toastr.error('Сделайте авторизацию', 'Для перехода', {
        timeOut: 2000,
        positionClass: 'toast-top-center',
      });
      return false
    }
  }

}
