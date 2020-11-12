import {Component, OnDestroy, OnInit, Self} from '@angular/core';
import {UserHeroService} from "../../core/services/user-hero.service";
import {Hero} from "../../models/hero-card-model";
import {PowerUp} from "../../models/power-ups-models";
import {DataServicesService} from "../../core/services/data-services.service";
import {mergeMap, takeUntil} from "rxjs/operators";
import {NgOnDestroy} from "../../core/services/ng-on-destroy.service";
import {FightTableDataService} from "../../core/services/fight-table-data.service";
import {TableDataModels} from "../../models/table-data-models";
import {timer} from "rxjs";
import {PowerUpsService} from "../../core/services/power-ups.service";
import {AuthService} from "../../core/services/auth.service";
import {quantityHeroes} from "../../shared/utils/constants/quantity-for-random.const";

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.scss'],
  providers: [NgOnDestroy]
})
export class BattlePageComponent implements OnInit, OnDestroy {
  public hero: Hero;
  public userPowerUps: PowerUp[];
  public enemy: Hero;
  public resultFight: string;
  public isSelect = false;
  private battle = false;

  constructor(
    @Self() public ngOnDestroy$: NgOnDestroy,
    private userHeroService: UserHeroService,
    private data: DataServicesService,
    private fightTableDataService: FightTableDataService,
    private powerUpsService: PowerUpsService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.userHeroService.setStateSelectBtn(false)
    this.userPowerUps = this.powerUpsService.getPowerUps();
    this.hero = this.userHeroService.getHeroForFight();
    this.getRandomEnemy()
    this.authService.checkSession()
  }

  public getRandom(): number {
    let random = Math.floor((Math.random() * quantityHeroes.max) + quantityHeroes.min);
    return random;
  }

  public getRandomEnemy(): void {
    timer(1000).pipe(mergeMap(() =>
      this.data.getById(this.getRandom())
    ))
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((response: Hero) => {
        this.enemy = response
      })
  }

  public heroPower(hero: object): number {
    return Object.values(hero).reduce((acc, current) => {
      if (current !== 'null') {
        return +acc + +current
      } else {
        return 0
      }
    });
  }

  public createFightData(result: string): TableDataModels {
    return {
      battleTime: new Date(),
      heroName: this.hero.name,
      opponentName: this.enemy.name,
      result: result,
      heroId: this.hero.id,
      opponentId: this.enemy.id
    };
  }

  public fight(): void {
        this.battle = true;
        timer(5000)
          .pipe(takeUntil(this.ngOnDestroy$))
          .subscribe(() => {
            this.battle = false;
            this.getRandomEnemy();
            this.heroPower(this.hero.powerstats) > this.heroPower(this.enemy.powerstats) ? this.createFight('Win') : this.createFight('Loose');
            this.isSelect = !this.isSelect;
          });
  }

  private createFight(result: string): void {
    this.powerUpsService.setToLocalStorage();
    this.resultFight = result;
    this.fightTableDataService.setToLocalStorage(this.createFightData(result));
    this.enemy = null;
  }

  public selectPower(item: PowerUp): void {
    if (item.quantity > 0) {
      this.hero.powerstats[item.param.toLowerCase()] = +this.hero.powerstats[item.param.toLowerCase()] + item.stats;
      --item.quantity;
      this.isSelect = !this.isSelect;
      this.powerUpsService.updatePowerUps(item);
    }
  }
  ngOnDestroy(): void {
    this.userHeroService.setStateSelectBtn(true);
  }
}
