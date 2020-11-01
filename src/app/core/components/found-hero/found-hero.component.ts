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
  chooseHeroState = false;
  public routeName: any;
  constructor(
    private userHeroService: UserHeroService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeName = this.activeRoute
    console.log(this.routeName)
  }

  chooseThisHero() {
    this.chooseHeroState = true;
    this.userHeroService.addToMyHeroes(this.foundHero)
  }

  chooseForFight() {
    this.chooseHeroState = true;
    console.log('fight')
  }
}
