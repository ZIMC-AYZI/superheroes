import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import {AbstractFormComponent} from "../../../shared/classes/abstract-form-component";
import {User} from "../../../models/user-models";
import {START_REGISTRATION_FORM_VALIDATORS_CONST} from "../utils/start-registration-form-validators.const";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends AbstractFormComponent implements OnInit {
  private userData: User[] = [];

  constructor(
    private fb: FormBuilder,
  ) {
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
      username: ['', [
        Validators.required,
        Validators.minLength(START_REGISTRATION_FORM_VALIDATORS_CONST.userNickNameMinLength),
        Validators.pattern(START_REGISTRATION_FORM_VALIDATORS_CONST.userNickNamePattern)
      ]]
    })
  }

  public registerUser({email, password, username}: User): void {
    if (this.form.valid) {
      const user = {
        email,
        password,
        username
      };
      this.userData = [...this.userData, user];
      localStorage.setItem('users', JSON.stringify(this.userData))
    }
    this.form.reset()
  }

}
