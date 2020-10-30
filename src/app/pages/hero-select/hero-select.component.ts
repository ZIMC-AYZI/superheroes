import { Component, OnInit } from '@angular/core';
import {DataServicesService} from "../../core/services/data-services.service";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {AbstractFormComponent} from "../../shared/classes/abstract-form-component";
import {Hero} from "../../models/hero-card-model";
import {SEARCH_HEROES_VALIDATORS_CONST} from "./utils/search-heroes-validators.const";

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent extends AbstractFormComponent implements OnInit {
  public result: string;
  public resultState = false;
  public foundHeroes: Hero[] = [];
  public recentSearches: string[] = [];
  public stateAlphabetical = false;
  public myLetter: string = 'A';
  constructor(
    private data: DataServicesService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    super()
  }

  protected initForm(): void {
    if (localStorage.getItem('recent-search')){
      this.recentSearches = [...JSON.parse(localStorage.getItem('recent-search'))];
      console.log(...this.recentSearches)
    }
    this.form = this.fb.group({
      userEnterValue: ['', [
        Validators.required,
        Validators.pattern(SEARCH_HEROES_VALIDATORS_CONST.findHeroPattern)
      ]]
    });
    this.authService.checkSession()
  }

  public findHeroes(): void {
    if (this.form.valid){
      this.recentSearches.push(this.form.value.userEnterValue);
      localStorage.setItem('recent-search', JSON.stringify(this.recentSearches));
      this.data.getData(this.form.value.userEnterValue)
        .subscribe((response: any) => {
          this.foundHeroes = response.results;
          this.resultState = true;
          this.result = response.results.length;
        })
    }
  }

  public recentSearch(recent): void {
    this.data.getData(recent)
      .subscribe((response: any) => {
        this.foundHeroes = response.results;
        this.resultState = true;
        this.result = response.results.length;
      })
  }

  public showAlphabetical() {
    this.stateAlphabetical = !this.stateAlphabetical
  }

  toggleLetter(letter: string) {
    this.myLetter = letter
  }

  searchByValueBtn(menuState: boolean) {
    this.stateAlphabetical = menuState
    this.recentSearches.push(this.myLetter);
    localStorage.setItem('recent-search', JSON.stringify(this.recentSearches));
    this.data.getData(this.myLetter)
      .subscribe((response: any) => {
        this.foundHeroes = response.results;
        this.resultState = true;
        this.result = response.results.length;
      })
  }
}
