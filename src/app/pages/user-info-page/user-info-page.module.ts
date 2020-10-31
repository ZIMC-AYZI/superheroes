import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserInfoPageComponent} from "./user-info-page.component";
import {MatTabsModule} from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: UserInfoPageComponent
  }
];

@NgModule({
  declarations: [
    UserInfoPageComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserInfoPageComponent
  ]
})
export class UserInfoPageModule { }
