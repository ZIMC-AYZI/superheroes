import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./pages/login-registration-page/login-page/login-page.component";
import {RegistrationComponent} from "./pages/login-registration-page/registration/registration.component";


const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistrationComponent},
  {
    path: 'hero-select',
    loadChildren: () => import('./pages/hero-select/hero-select.module').then(m =>
    m.HeroSelectModule)
  },
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
