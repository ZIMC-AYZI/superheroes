import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserInfoPageComponent} from "./user-info-page.component";
import {MatTabsModule} from '@angular/material/tabs';
import {FoundHeroModule} from "../../core/components/found-hero/found-hero.module";
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";

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
        FoundHeroModule,
        RouterModule.forChild(routes),
        NgbModule,
        NgbCarouselModule,
        MatIconModule
    ],
  exports: [
    UserInfoPageComponent
  ]
})
export class UserInfoPageModule { }
