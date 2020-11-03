import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {myRoutes} from "./core/routes/routes";



const routes: Routes = [
  {
    path: myRoutes.heroSelectPage.routerPath,
    loadChildren: () => import('./pages/hero-select/hero-select.module').then(m =>
      m.HeroSelectModule)
  },
  {
    path: myRoutes.userInfoPage.routerPath,
    loadChildren: () => import('./pages/user-info-page/user-info-page.module').then(m =>
      m.UserInfoPageModule)
  },
  {path: '**', redirectTo: myRoutes.logIn.fullPath, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
