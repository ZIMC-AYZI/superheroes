import { Component, OnInit } from '@angular/core';
import {UserHeroService} from "../../core/services/user-hero.service";
import {Hero} from "../../models/hero-card-model";

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit {
  selectedHeroes: Hero[] = [];
  constructor(userHeroService: UserHeroService) { }

  ngOnInit(): void {
    this.selectedHeroes = JSON.parse(localStorage.getItem('user-heroes'));
    console.log(this.selectedHeroes)
  }

}
