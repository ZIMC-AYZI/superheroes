import { Injectable } from '@angular/core';
import {Hero} from "../../models/hero-card-model";

@Injectable({
  providedIn: 'root'
})
export class UserHeroService {
  userHeroes: Hero[] = [];
  addToMyHeroes(hero) {
    localStorage.setItem('user-heroes', JSON.stringify(hero));
  }
  removeFromMyHeroes(hero) {
    this.userHeroes = this.userHeroes.filter(el => el.name !== hero.name);
    localStorage.setItem('user-heroes', JSON.stringify(this.userHeroes))
  }
}
