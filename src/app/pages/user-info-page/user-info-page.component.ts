import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Hero} from "../../models/hero-card-model";
import {AuthService} from "../../core/services/auth.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
import {ELEMENT_DATA} from "./utils/static-battle-data-const";
import {powerUps} from "../../shared/utils/constants/powerups.const";
import {PowerUp} from "../../models/power-ups-models";


@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit,AfterViewInit, OnDestroy{
  public selectedHeroes: Hero[] = [];
  public userPowerUps: PowerUp[] = powerUps;
  public displayedColumns: string[] = ['battleTime', 'heroName', 'OpponentName', 'result'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA) ;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.selectedHeroes = JSON.parse(localStorage.getItem('allHeroes'));
    this.authService.checkSession();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }


  public trackByFn(index, item): void {
    return item.name;
  }
  ngOnDestroy(): void {
    if (localStorage.getItem('user-hero')) {
      localStorage.removeItem('user-hero')
    }
  }

}
