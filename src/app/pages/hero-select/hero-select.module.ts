import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroSelectComponent} from "./hero-select.component";
import {FoundHeroComponent} from "./found-hero/found-hero.component";
import { ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import { AlphabeticalComponent } from './alphabetical/alphabetical.component';

const routes: Routes = [
  {
    path: '',
    component: HeroSelectComponent
  }
];

@NgModule({
  declarations: [
    HeroSelectComponent,
    FoundHeroComponent,
    AlphabeticalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HeroSelectComponent,
    FoundHeroComponent
  ]
})
export class HeroSelectModule { }
