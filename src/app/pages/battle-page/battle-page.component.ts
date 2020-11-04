import {Component, Input, OnInit, Self} from '@angular/core';
import {UserHeroService} from "../../core/services/user-hero.service";
import {Hero} from "../../models/hero-card-model";
import {PowerUp} from "../../models/power-ups-models";
import {powerUps} from "../../shared/utils/constants/powerups.const";
import {DataServicesService} from "../../core/services/data-services.service";
import {mergeMap, takeUntil} from "rxjs/operators";
import {NgOnDestroy} from "../../core/services/ng-on-destroy.service";
import {FightTableDataService} from "../../core/services/fight-table-data.service";
import {TableDataModels} from "../../models/table-data-models";
import {timer} from "rxjs";
import {PowerUpsService} from "../../core/services/power-ups.service";

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss'],
  providers: [NgOnDestroy]
})
export class BattlePageComponent implements OnInit {
  public hero: Hero;
  public userPowerUps: PowerUp[];
  public enemy: Hero;
  public resultFight: string;
  public showModal = false;
  public isSelect = false;
  private isFight = false;

  constructor(
    @Self() public ngOnDestroy$: NgOnDestroy,
    private userHeroService: UserHeroService,
    private data: DataServicesService,
    private fightTableDataService: FightTableDataService,
    private powerUpsService: PowerUpsService
  ) {
  }

  ngOnInit(): void {
    this.userPowerUps = this.powerUpsService.getPowerUps();
    this.hero = this.userHeroService.getHeroForFight();
    this.getRandomEnemy()
  }

  public getRandom() {
    let random = Math.floor((Math.random() * 731) + 1);
    return random;
  }

  getRandomEnemy() {
    timer(3000).pipe(mergeMap(() =>
      this.data.getById(this.getRandom())
    ))
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((response: Hero) => {
        this.enemy = response
      })
  }

  heroPower(hero) {
    return Object.values(hero).reduce((a, b) => +a + +b);
  }

  createFightData(result): TableDataModels {
    return {
      battleTime: new Date(),
      heroName: this.hero.name,
      opponentName: this.enemy.name,
      result: result,
      heroId: this.hero.id,
      opponentId: this.enemy.id
    };
  }

  fight() {
    if (this.heroPower(this.hero.powerstats) >= this.heroPower(this.enemy.powerstats)) {
      this.resultFight = 'Win';
      this.getRandomEnemy();
      this.fightTableDataService.setToLocalStorage(this.createFightData(this.resultFight))
      this.enemy = null;
      this.showModal = true;
      this.isFight = true;
    } else {
      this.resultFight = 'Loose';
      this.getRandomEnemy();
      this.fightTableDataService.setToLocalStorage(this.createFightData(this.resultFight))
      this.enemy = null
      this.showModal = true;
      this.isFight = true;
    }

  }

  closeModal(modalState: boolean) {
    this.showModal = modalState
  }

  selectPower(item: PowerUp) {
    if (item.quantity > 0) {
      this.hero.powerstats[item.param.toLowerCase()] = +this.hero.powerstats[item.param.toLowerCase()] + item.stats;
      --item.quantity;
      this.isSelect = !this.isSelect;
      if (this.isFight){
        this.powerUpsService.updatePowerUps(item)
      }
    }
  }
}
