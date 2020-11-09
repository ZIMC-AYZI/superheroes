import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserInfoPageComponent} from "./user-info-page.component";
import {MatTabsModule} from '@angular/material/tabs';
import {FoundHeroModule} from "../../core/components/found-hero/found-hero.module";
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


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
    NgbModule,
    NgbCarouselModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UserInfoPageComponent
  ]
})
export class UserInfoPageModule {
}
