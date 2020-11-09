import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoundHeroComponent} from "./found-hero.component";



@NgModule({
  declarations: [FoundHeroComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FoundHeroComponent
  ]
})
export class FoundHeroModule { }
