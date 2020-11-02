import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero-card-model";
import {UserHeroService} from "../../services/user-hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-found-hero',
  templateUrl: './found-hero.component.html',
  styleUrls: ['./found-hero.component.scss']
})
export class FoundHeroComponent implements OnInit {
  @Input() foundHero: Hero;
  public chooseHeroState = false;
  public routeName: any;
  public allHeroes: object[];
  constructor(
    private userHeroService: UserHeroService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeName = this.activeRoute;
    // this.userHeroService.checkInUserHeroes(this.foundHero)
  }

  public chooseThisHero(): void {
    this.chooseHeroState = true;
    this.userHeroService.chooseHero(this.foundHero)
  }

  public chooseForFight(): void {
    this.chooseHeroState = true;
    console.log('fight')
  }
}
