import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroSelectComponent} from "./hero-select.component";
import {FoundHeroComponent} from "./found-hero/found-hero.component";
import { ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HeroSelectComponent,
    FoundHeroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    HeroSelectComponent,
    FoundHeroComponent
  ]
})
export class HeroSelectModule { }
