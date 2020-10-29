import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationComponent} from "./registration/registration.component";
import {AuthService} from "../../core/services/auth.service";
import {ModalModule} from "../../core/components/modal/modal.module";


@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule
  ],
  exports: [
    LoginPageComponent,
    RegistrationComponent
  ],
  providers: [
    AuthService
  ]
})
export class LoginPageModule { }