import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BattlePageComponent} from "./battle-page.component";
import {RouterModule, Routes} from "@angular/router";
import {FoundHeroModule} from "../../core/components/found-hero/found-hero.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import {ModalModule} from "../../core/components/modal/modal.module";

const routes: Routes = [
  {
    path: '',
    component: BattlePageComponent
  }
]
@NgModule({
  declarations: [BattlePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FoundHeroModule,
    MatProgressSpinnerModule,
    ModalModule
  ],
  exports: [
    BattlePageComponent
  ]
})
export class BattlePageModule { }
