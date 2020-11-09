import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroSelectComponent} from "./hero-select.component";
import { ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';
import {FoundHeroModule} from "../../core/components/found-hero/found-hero.module";

const routes: Routes = [
  {
    path: '',
    component: HeroSelectComponent
  }
];

@NgModule({
  declarations: [
    HeroSelectComponent,
    AlphabeticalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    FoundHeroModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeroSelectComponent
  ]
})
export class HeroSelectModule { }
