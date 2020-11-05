import {Component, OnDestroy, OnInit, Self} from '@angular/core';
import {DataServicesService} from "../../core/services/data-services.service";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {AbstractFormComponent} from "../../shared/classes/abstract-form-component";
import {Hero} from "../../models/hero-card-model";
import {SEARCH_HEROES_VALIDATORS_CONST} from "./utils/search-heroes-validators.const";
import {NgOnDestroy} from "../../core/services/ng-on-destroy.service";
import {takeUntil} from "rxjs/operators";
import {UserHeroService} from "../../core/services/user-hero.service";
import {User} from "../../models/user-models";
import {ServerResponse} from "../../models/server-response-models";

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss'],
  providers: [NgOnDestroy]
})
export class HeroSelectComponent extends AbstractFormComponent implements OnInit, OnDestroy {
  public result: number;
  public resultState = false;
  public foundHeroes: Hero[] = [];
  public recentSearches: string[] = [];
  public stateAlphabetical = false;
  public myLetter: string = 'A';

  constructor(
    @Self() public ngOnDestroy$: NgOnDestroy,
    private data: DataServicesService,
    private authService: AuthService,
    private fb: FormBuilder,
    private userHeroService: UserHeroService
  ) {
    super()
  }

  protected initForm(): void {
    if (localStorage.getItem('recent-search')) {
      this.recentSearches = [...JSON.parse(localStorage.getItem('recent-search'))];
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
    if (this.form.valid) {
      this.recentSearches = [...this.recentSearches, this.form.value.userEnterValue]
      localStorage.setItem('recent-search', JSON.stringify(this.recentSearches));
      this.data.getData(this.form.value.userEnterValue)
        .pipe(takeUntil(this.ngOnDestroy$))
        .subscribe((response: ServerResponse) => {
          this.foundHeroes = response.results;
          this.resultState = true;
          this.result = response.results.length;
        })
    }
  }

  public recentSearch(recent: string): void {
    this.data.getData(recent)
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((response: ServerResponse) => {
        this.foundHeroes = response.results;
        this.resultState = true;
        this.result = response.results.length;
      })
  }

  public showAlphabetical(): void {
    this.stateAlphabetical = !this.stateAlphabetical
  }

  public toggleLetter(letter: string): void {
    this.myLetter = letter
  }

  public searchByValueBtn(menuState: boolean): void {
    this.stateAlphabetical = menuState;
    this.recentSearches = [...this.recentSearches, this.myLetter]
    localStorage.setItem('recent-search', JSON.stringify(this.recentSearches));
    this.data.getData(this.myLetter)
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((response: ServerResponse) => {
        this.foundHeroes = response.results;
        this.resultState = true;
        this.result = response.results.length;
      })
  }

  ngOnDestroy(): void {
    this.userHeroService.addToMyHeroes()
  }
}
