import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../../models/hero-card-model";

@Component({
  selector: 'app-found-hero',
  templateUrl: './found-hero.component.html',
  styleUrls: ['./found-hero.component.scss']
})
export class FoundHeroComponent implements OnInit {
  @Input() foundHero: Hero;
  chooseHeroState = true;
  buttonState = 'select';
  constructor() { }

  ngOnInit(): void {

  }

  chooseThisHero() {
    this.chooseHeroState = !this.chooseHeroState
    if (this.chooseHeroState){
      this.buttonState = 'select'
    } else this.buttonState = 'remove'
  }
}
