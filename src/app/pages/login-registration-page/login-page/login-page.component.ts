import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {AbstractFormComponent} from "../../../shared/classes/abstract-form-component";
import {User} from "../../../models/user-models";
import {myRoutes} from "../../../core/routes/routes";
import {MyToastrService} from "../../../core/services/my-toastr.service";

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
    private myToastrService:MyToastrService
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
      this.myToastrService.createMessage(
        'Сделайте авторизацию если хотите продолжить',
        'Ваша сессия окончена',
        6000,
        'toast-top-center'
      );
      this.authService.stateSessionForGuard(true)
    }
  }

  public login({email, password}: User): void {
    if (this.form.valid) {
      this.userData.forEach(el => {
        if (email === el.email && password === el.password) {
          this.authService.signIn();
          this.myToastrService.createMessage(
            'Добро пожаловать, отправляю вас на поле выбора героя',
            `${el.username}`,
            2000,
            'toast-top-center'
          );
          setTimeout(() => {
            this.router.navigate([myRoutes.heroSelectPage.routerPath]);
          }, 2000)
        } else {
          this.myToastrService.createMessage(
            'Такого юзера нету',
            'Простите',
            2000,
            'toast-top-center'
          );
        }
      })
    }
    this.form.reset()
  }

  public goToRegister(): void {
    this.router.navigate([myRoutes.register.fullPath])
  }
}
