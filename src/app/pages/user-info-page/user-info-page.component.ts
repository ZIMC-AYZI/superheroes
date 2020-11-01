import { Component, OnInit } from '@angular/core';
import {UserHeroService} from "../../core/services/user-hero.service";
import {Hero} from "../../models/hero-card-model";
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit {
  selectedHeroes: Hero[] = [];
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.selectedHeroes.push(JSON.parse(localStorage.getItem('user-heroes')));
    this.authService.checkSession()
  }
  trackByFn(index, item) {
    return item.name;
  }

}
