import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationComponent} from "./registration/registration.component";
import {RouterModule, Routes} from "@angular/router";
import {myRoutes} from "../../core/routes/routes";

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: myRoutes.register.routerPath,
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginPageComponent,
    RegistrationComponent
  ]
})
export class LoginPageModule {
}
