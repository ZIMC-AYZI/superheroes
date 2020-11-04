import { Injectable } from '@angular/core';
import {PowerUp} from "../../models/power-ups-models";
import {powerUps} from "../../shared/utils/constants/powerups.const";

@Injectable({
  providedIn: 'root'
})
export class PowerUpsService {
  private myPowerUps:PowerUp[] = powerUps;
  updatePowerUps(item) {
    this.myPowerUps = this.myPowerUps.map(el => {
     if (el.param === item.param) {
       el = item;
     }
     return el
    })
    localStorage.setItem('power-ups', JSON.stringify(this.myPowerUps))
  }

  setToLocalStorage() {
    localStorage.setItem('power-ups', JSON.stringify(this.myPowerUps));
  }
  getPowerUps() {
    return JSON.parse(localStorage.getItem('power-ups'));
  }
}
