import {Injectable} from '@angular/core';
import {Hero} from "../../models/hero-card-model";

@Injectable({
  providedIn: 'root'
})
export class UserHeroService {
  private userHeroes: Hero[] = [];
  private currentHero: Hero
  public chooseHero(hero): void {
    localStorage.setItem('user-hero', JSON.stringify(hero));
  }

  public addToMyHeroes(): void {
    if (localStorage.getItem('user-hero')) {
        this.currentHero = JSON.parse(localStorage.getItem('user-hero'));
      if (localStorage.getItem('allHeroes')) {
        this.userHeroes = [...JSON.parse(localStorage.getItem('allHeroes')),this.currentHero];
      } else {
        this.userHeroes = [...this.userHeroes, this.currentHero];
      }
      localStorage.setItem('allHeroes', JSON.stringify(this.userHeroes));
    }
  }
}
