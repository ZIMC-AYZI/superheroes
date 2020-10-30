import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroSelectComponent} from "./hero-select.component";
import {FoundHeroComponent} from "./found-hero/found-hero.component";
import { ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HeroSelectComponent
  }
];

@NgModule({
  declarations: [
    HeroSelectComponent,
    FoundHeroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeroSelectComponent,
    FoundHeroComponent,
    RouterModule
  ]
})
export class HeroSelectModule { }
