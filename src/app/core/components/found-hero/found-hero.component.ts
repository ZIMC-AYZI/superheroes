import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero-card-model";
import {UserHeroService} from "../../services/user-hero.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-found-hero',
  templateUrl: './found-hero.component.html',
  styleUrls: ['./found-hero.component.scss']
})
export class FoundHeroComponent implements OnInit {
  @Input() public foundHero: Hero;
  public chooseHeroState = false;
  public allHeroes: Hero[];

  constructor(
    private userHeroService: UserHeroService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  public chooseThisHero(): void {
    this.chooseHeroState = true;
    this.userHeroService.chooseHero(this.foundHero)
  }

  public chooseForFight(): void {
    this.chooseHeroState = true;
    //TODO:
    console.log('fight')
  }

  public viewHeroInfo(): void {
    this.userHeroService.setDisplayHero(this.foundHero)
    this.router.navigate(['hero-info'])
  }

  public select(): void {
    if (typeof this.activeRoute.component !== "string" && this.activeRoute.component.name === 'HeroSelectComponent'){
      this.chooseThisHero()
    }else if (typeof this.activeRoute.component !== "string" && this.activeRoute.component.name === 'UserInfoPageComponent') {
      this.chooseForFight()
    }
  }
}
