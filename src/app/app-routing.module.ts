import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./core/components/login-page/login-page.component";
import {RegistrationComponent} from "./core/components/login-page/registration/registration.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistrationComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
