import {AfterViewInit, Component, OnDestroy, OnInit, Self, ViewChild} from '@angular/core';
import {Hero} from "../../models/hero-card-model";
import {AuthService} from "../../core/services/auth.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
import {powerUps} from "../../shared/utils/constants/powerups.const";
import {PowerUp} from "../../models/power-ups-models";
import {FightTableDataService} from "../../core/services/fight-table-data.service";
import {TableDataModels} from "../../models/table-data-models";
import {UserHeroService} from "../../core/services/user-hero.service";
import {takeUntil} from "rxjs/operators";
import {DataServicesService} from "../../core/services/data-services.service";
import {NgOnDestroy} from "../../core/services/ng-on-destroy.service";
import {Router} from "@angular/router";
import {PowerUpsService} from "../../core/services/power-ups.service";


@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss'],
  providers: [NgOnDestroy]
})
export class UserInfoPageComponent implements OnInit,AfterViewInit, OnDestroy{
  public selectedHeroes: Hero[] = [];
  public userPowerUps: PowerUp[] = [];
  public displayedColumns: string[] = ['battleTime', 'heroName', 'OpponentName', 'result'];
  public dataSource: MatTableDataSource<TableDataModels>;
  public heroInTable: Hero;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    @Self() public ngOnDestroy$: NgOnDestroy,
    private authService: AuthService,
    private fightTableDataService:FightTableDataService,
    private userHeroService: UserHeroService,
    private data:DataServicesService,
    private router: Router,
    private powerUpsService:PowerUpsService
  ) { }

  ngOnInit(): void {
    this.powerUpsService.setToLocalStorage();
    this.userPowerUps = this.powerUpsService.getPowerUps();
    this.dataSource = new MatTableDataSource(this.fightTableDataService.getDataFromLocalStorage())
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

  showInfoMyHero(element) {
    this.data.getById(element.heroId)
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((response: Hero) => {
        this.heroInTable = response
        this.userHeroService.setDisplayHero(this.heroInTable)
        this.router.navigate(['hero-info'])
      })
  }
  showInfoOpponent(element) {
    this.data.getById(element.opponentId)
      .pipe(takeUntil(this.ngOnDestroy$))
      .subscribe((response: Hero) => {
        this.heroInTable = response
        this.userHeroService.setDisplayHero(this.heroInTable)
        this.router.navigate(['hero-info'])
      })
  }

}
