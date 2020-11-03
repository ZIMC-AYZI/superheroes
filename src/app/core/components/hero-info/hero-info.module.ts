import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroInfoComponent} from "./hero-info.component";
import {FoundHeroModule} from "../found-hero/found-hero.module";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: HeroInfoComponent
  }
];

@NgModule({
  declarations: [HeroInfoComponent],
  imports: [
    CommonModule,
    FoundHeroModule,
    RouterModule.forChild(routes)
  ],
  exports: [HeroInfoComponent]
})
export class HeroInfoModule { }
