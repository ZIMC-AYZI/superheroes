import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ModalModule} from "../../core/components/modal/modal.module";
import {RouterModule, Routes} from "@angular/router";
import {myRoutes} from "../../core/routes/routes";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: myRoutes.logIn.routerPath,
        component: LoginPageComponent
      },
      {
        path: myRoutes.register.routerPath,
        component: RegistrationComponent
      }
    ]
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
    ModalModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginPageComponent,
    RegistrationComponent
  ]
})
export class LoginPageModule {
}
