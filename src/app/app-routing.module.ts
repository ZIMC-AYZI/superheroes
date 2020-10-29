import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./pages/login-registration-page/login-page/login-page.component";
import {RegistrationComponent} from "./pages/login-registration-page/registration/registration.component";
import {HeroSelectComponent} from "./pages/hero-select/hero-select.component";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'hero-select', component: HeroSelectComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
