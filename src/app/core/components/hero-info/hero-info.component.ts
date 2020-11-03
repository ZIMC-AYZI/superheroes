import {Component, OnInit} from '@angular/core';
import {UserHeroService} from "../../services/user-hero.service";
import {Hero} from "../../../models/hero-card-model";

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.scss']
})
export class HeroInfoComponent implements OnInit {
  public foundHero: Hero;

  constructor(
   private userHeroService: UserHeroService
  ) { }

  ngOnInit(): void {
    this.foundHero = this.userHeroService.getDisplayHero()
    console.log(this.foundHero)
  }

}
