import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {myRoutes} from "./core/routes/routes";
import {AuthGuard} from "./core/services/auth.guard";


const routes: Routes = [
  {
    path: myRoutes.logIn.routerPath,
    loadChildren: () => import('./pages/login-registration-page/login-page.module').then(m =>
      m.LoginPageModule
    )
  },
  {
    path: myRoutes.heroSelectPage.routerPath,
    loadChildren: () => import('./pages/hero-select/hero-select.module').then(m =>
      m.HeroSelectModule),
    canActivate: [AuthGuard]
  },
  {
    path: myRoutes.userInfoPage.routerPath,
    loadChildren: () => import('./pages/user-info-page/user-info-page.module').then(m =>
      m.UserInfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: myRoutes.heroInfoPage.routerPath,
    loadChildren: () => import('./core/components/hero-info/hero-info.module').then(m =>
      m.HeroInfoModule),
    canActivate: [AuthGuard]
  },
  {
    path: myRoutes.battlePage.routerPath,
    loadChildren: () => import('./pages/battle-page/battle-page.module').then(m =>
      m.BattlePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: myRoutes.logIn.fullPath,
    pathMatch: 'full'
  },
  {path: '**', redirectTo: myRoutes.logIn.fullPath, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
