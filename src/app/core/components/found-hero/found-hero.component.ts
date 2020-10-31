import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero-card-model";
import {UserHeroService} from "../../services/user-hero.service";

@Component({
  selector: 'app-found-hero',
  templateUrl: './found-hero.component.html',
  styleUrls: ['./found-hero.component.scss']
})
export class FoundHeroComponent implements OnInit {
  @Input() foundHero: Hero;
  chooseHeroState = false;
  buttonState = 'select';
  constructor(private userHeroService: UserHeroService) { }

  ngOnInit(): void {
  }

  chooseThisHero() {
    this.chooseHeroState = !this.chooseHeroState;
    if (this.chooseHeroState){
      this.buttonState = 'remove';
      this.userHeroService.addToMyHeroes(this.foundHero)
    } else {
      this.buttonState = 'select';
      this.userHeroService.removeFromMyHeroes(this.foundHero)
    }
  }
}
