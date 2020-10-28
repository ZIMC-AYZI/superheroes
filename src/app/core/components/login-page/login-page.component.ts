import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  userData: any[] = [];
  form: FormGroup;
  showModal: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    const userStorage = JSON.parse(localStorage.getItem('users'));
    this.userData.push(...userStorage)
    console.log(this.userData)
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    });
    this.auth.checkSession();
    this.showModal = this.auth.tokenState();
  }

  login({email, password}) {
    if (this.form.valid) {
      this.userData.forEach(el => {
        if (email === el.email && password === el.password){
          console.log(el);
          this.auth.signIn()
          console.log('вы вошли')
        } else console.log('такого нету')
      })
    } this.form.reset()

  }

  goToRegister() {
    this.router.navigate(['register'])
  }
}
