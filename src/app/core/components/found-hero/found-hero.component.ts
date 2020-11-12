import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero-card-model";
import {UserHeroService} from "../../services/user-hero.service";
import {Router} from "@angular/router";
import {myRoutes} from "../../routes/routes";

@Component({
  selector: 'app-found-hero',
  templateUrl: './found-hero.component.html',
  styleUrls: ['./found-hero.component.scss']
})
export class FoundHeroComponent implements OnInit{
  public chooseHeroState = false;
  public allHeroes: Hero[];
  public stateSelectBtn: boolean;
  @Input() public foundHero: Hero;

  constructor(
    private userHeroService: UserHeroService,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
    this.stateSelectBtn = this.userHeroService.getStateSelectBtn();
  }

  public chooseThisHero(): void {
    this.chooseHeroState = true;
    this.userHeroService.chooseHero(this.foundHero);
  }

  public chooseForFight(): void {
    this.chooseHeroState = true;
    this.userHeroService.setHeroForFight(this.foundHero);
  }

  public viewHeroInfo(): void {
    this.userHeroService.setDisplayHero(this.foundHero)
    this.router.navigate([myRoutes.heroInfoPage.routerPath])
  }

  public select(): void {
    if (localStorage.getItem('allHeroes')){
      const test = JSON.parse(localStorage.getItem('allHeroes'));
      test.find(el => {
        if (el.id === this.foundHero.id) {
          this.chooseForFight();
        } else {
          this.chooseThisHero();
        }
      });
    } else {
      this.chooseThisHero();
    }
  }
}
