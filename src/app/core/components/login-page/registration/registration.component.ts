import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userData: object[] = [];
  form: FormGroup;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^([\w\d_\-])+(([^\.]*\.[^\.]*)?){1,3}@([\w\d]){1,5}(.com|.co|.org|.net|.us)/)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$%.&!-]).{6,}/)
      ]),
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^[a-z]*?([-_ ][a-z]+){0,1}$/i)
      ])
    })
  }

  registerUser({email, password, username}) {
    if (this.form.valid) {
    const user: object = {
      // id: Date.now(),
      email,
      password,
      username
    };
    this.userData.push(user);
     localStorage.setItem('users', JSON.stringify(this.userData))
    }
    this.form.reset()
  }

}
