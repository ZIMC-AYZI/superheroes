import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {AbstractFormComponent} from "../../../shared/classes/abstract-form-component";
import {User} from "../../../models/user-models";
import {myRoutes} from "../../../core/routes/routes";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent extends AbstractFormComponent implements OnInit {
  private userData: User[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ) {
    super();
  }

  protected initForm(): void {
    if (localStorage.getItem('users')) {
      const userStorage = JSON.parse(localStorage.getItem('users'));
      this.userData = [...this.userData, ...userStorage]
    }
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
      ]],
      password: [null, [
        Validators.required,
      ]]
    });
    if (!this.authService.getSessionEnd()) {
      this.toastr.info('Сделайте авторизацию если хотите продолжить', 'Ваша сессия окончена', {
        timeOut: 6000,
        positionClass: 'toast-top-center',
      });
      this.authService.stateSessionForGuard(true)
    }
  }

  public login({email, password}: User): void {
    if (this.form.valid) {
      this.userData.forEach(el => {
        if (email === el.email && password === el.password) {
          this.authService.signIn();
          this.toastr.success('Добро пожаловать, отправляю вас на поле выбора героя', `${el.username}`, {
            timeOut: 2000,
            positionClass: 'toast-top-center',
          });
          setTimeout(() => {
            this.router.navigate([myRoutes.heroSelectPage.routerPath]);
          }, 2000)
        } else {
          this.toastr.error('Такого юзера нету', `Простите`, {
            timeOut: 2000,
            positionClass: 'toast-top-center',
          });
        }
      })
    }
    this.form.reset()
  }

  public goToRegister(): void {
    this.router.navigate([myRoutes.register.fullPath])
  }
}
