import { Component, OnInit } from '@angular/core';
import {DataServicesService} from "../../core/services/data-services.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {AbstractFormComponent} from "../../shared/classes/abstract-form-component";
import {START_REGISTRATION_FORM_VALIDATORS_CONST} from "../login-registration-page/utils/start-registration-form-validators.const";

@Component({
  selector: 'app-hero-select',
  templateUrl: './hero-select.component.html',
  styleUrls: ['./hero-select.component.scss']
})
export class HeroSelectComponent extends AbstractFormComponent implements OnInit {
  result: string;
  resultState: boolean = false;
  foundHeroes: any[] = [];
  recentSearches: any[] = [];
  form: FormGroup;
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
        Validators.pattern(START_REGISTRATION_FORM_VALIDATORS_CONST.findHeroPattern)
      ]]
    });
    this.authService.checkSession()
  }

  findHeroes() {
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

  recentSearch(recent) {
    this.data.getData(recent)
      .subscribe((response: any) => {
        this.foundHeroes = response.results;
        this.resultState = true;
        this.result = response.results.length;
      })
  }
}
