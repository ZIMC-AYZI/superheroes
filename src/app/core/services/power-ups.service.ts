import {Injectable} from '@angular/core';
import {PowerUp} from "../../models/power-ups-models";
import {powerUps} from "../../shared/utils/constants/powerups.const";

@Injectable({
  providedIn: 'root'
})
export class PowerUpsService {
  private myPowerUps: PowerUp[] = this.getPowerUps() || powerUps;

  public updatePowerUps(item: PowerUp): void {
    this.myPowerUps = this.myPowerUps.map(el => {
      if (el.param === item.param) {
        el = item;
      }
      return el
    });
  }

  public setToLocalStorage(): void {
    localStorage.setItem('power-ups', JSON.stringify(this.myPowerUps));
  }

  public getPowerUps(): PowerUp[] {
    return JSON.parse(localStorage.getItem('power-ups'));
  }
}
