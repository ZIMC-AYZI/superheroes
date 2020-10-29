import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {START_REGISTRATION_FORM_VALIDATORS_CONST} from "../utils/start-registration-form-validators.const";
import {AbstractFormComponent} from "../../../shared/classes/abstract-form-component";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends AbstractFormComponent implements OnInit {
  userData: object[] = [];
  constructor( private fb: FormBuilder) {
    super();
  }

  protected initForm(): void {

    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern(START_REGISTRATION_FORM_VALIDATORS_CONST.userEmailPattern)
      ]],
      password: [null, [
        Validators.required,
        Validators.pattern(START_REGISTRATION_FORM_VALIDATORS_CONST.userPasswordPattern)
      ]],
      username: ['',[
        Validators.required,
        Validators.minLength(START_REGISTRATION_FORM_VALIDATORS_CONST.userNickNameMinLength),
        Validators.pattern(START_REGISTRATION_FORM_VALIDATORS_CONST.userNickNamePattern)
      ]]
    })
  }

  registerUser({email, password, username}) {
    if (this.form.valid) {
    const user: object = {
      email,
      password,
      username
    };
    this.userData.push(user);
     localStorage.setItem('users', JSON.stringify(this.userData))
      console.log(this.userData)
    }
    this.form.reset()
  }

}
