import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {AbstractFormComponent} from "../../../shared/classes/abstract-form-component";
import {User} from "../../../models/user-models";
import {myRoutes} from "../../../core/routes/routes";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent extends AbstractFormComponent implements OnInit {
  public showModal = false;
  private userData: User[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
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
    this.authService.checkSession();
    this.showModal = this.authService.tokenState();
    console.log(this.showModal)
  }

  public login({email, password}: User): void {
    if (this.form.valid) {
      this.userData.forEach(el => {
        if (email === el.email && password === el.password) {
          this.authService.signIn();
          this.router.navigate([myRoutes.heroSelectPage.routerPath]);
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
