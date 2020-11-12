import {Injectable} from '@angular/core';
import {Hero} from '../../models/hero-card-model';

@Injectable({
  providedIn: 'root'
})
export class UserHeroService {
  private userHeroes: Hero[] = [];
  private currentHero: Hero;
  private displayHero: Hero;
  private stateSelectBtn = true;


  public chooseHero(hero): void {
    localStorage.setItem('user-hero', JSON.stringify(hero));
  }

  public addToMyHeroes(): void {
    if (localStorage.getItem('user-hero')) {
      this.currentHero = JSON.parse(localStorage.getItem('user-hero'));
      if (localStorage.getItem('allHeroes')) {

        this.userHeroes = JSON.parse(localStorage.getItem('allHeroes'));
        this.userHeroes = this.userHeroes.filter(el => el.id !== this.currentHero.id);
        this.userHeroes = [...this.userHeroes, this.currentHero]
      } else {
        this.userHeroes = [...this.userHeroes, this.currentHero];
      }
      localStorage.setItem('allHeroes', JSON.stringify(this.userHeroes));
    }
  }


  public setDisplayHero(hero: Hero): void {
    this.displayHero = hero;
  }

  public getDisplayHero(): Hero {
    return this.displayHero;
  }

  public setHeroForFight(hero: Hero): void {
    localStorage.setItem('fight-hero', JSON.stringify(hero));
  }

  public getHeroForFight(): Hero {
    return JSON.parse(localStorage.getItem('fight-hero'));
  }

  setStateSelectBtn(state: boolean): void {
    this.stateSelectBtn = state;
  }

  getStateSelectBtn(): boolean {
    return this.stateSelectBtn;
  }
}
