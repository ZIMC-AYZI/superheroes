import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero-card-model";
import {UserHeroService} from "../../services/user-hero.service";
import {ActivatedRoute, Router} from "@angular/router";
import {myRoutes} from "../../routes/routes";

@Component({
  selector: 'app-found-hero',
  templateUrl: './found-hero.component.html',
  styleUrls: ['./found-hero.component.scss']
})
export class FoundHeroComponent {
  public chooseHeroState = false;
  public allHeroes: Hero[];
  @Input() public foundHero: Hero;

  constructor(
    private userHeroService: UserHeroService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  public chooseThisHero(): void {
    this.chooseHeroState = true;
    this.userHeroService.chooseHero(this.foundHero)
  }

  public chooseForFight(): void {
    this.chooseHeroState = true;
    this.userHeroService.setHeroForFight(this.foundHero)
  }

  public viewHeroInfo(): void {
    this.userHeroService.setDisplayHero(this.foundHero)
    this.router.navigate([myRoutes.heroInfoPage.routerPath])
  }

  public select(): void {
    if (typeof this.activeRoute.component !== "string" && this.activeRoute.component.name === 'HeroSelectComponent'){
      this.chooseThisHero()
    }else if (typeof this.activeRoute.component !== "string" && this.activeRoute.component.name === 'UserInfoPageComponent') {
      this.chooseForFight()
    }
  }
  public hideSelectBtn(): boolean {
    if (typeof this.activeRoute.component !== "string" && this.activeRoute.component.name !== 'BattlePageComponent'){
      return true
    } else {
      return false
    }
  }
}
