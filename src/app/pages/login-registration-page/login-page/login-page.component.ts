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
      this.userData.push(...userStorage)
    }
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
      ]],
      password: [null, [
        Validators.required,
      ]]
    });
    if (!this.authService.getSessionEnd()){
      this.toastr.error('Сделайте авторизацию если хотите продолжить', 'Ваша сессия окончена', {
        positionClass: 'toast-top-center',
      });
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
          console.log('вы вошли')
        } else console.log('такого нету')
      })
    }
    this.form.reset()
  }

  public goToRegister(): void {
    this.router.navigate([myRoutes.register.fullPath])
  }
}
