import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Hero} from "../../models/hero-card-model";
import {AuthService} from "../../core/services/auth.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from '@angular/material/table';
import {ELEMENT_DATA} from "./utils/static-battle-data-const";


@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit,AfterViewInit {
  selectedHeroes: Hero[] = [];
  displayedColumns: string[] = ['battleTime', 'heroName', 'OpponentName', 'result'];
  dataSource = new MatTableDataSource(ELEMENT_DATA) ;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.selectedHeroes.push(JSON.parse(localStorage.getItem('user-heroes')));
    this.authService.checkSession();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  trackByFn(index, item): void {
    return item.name;
  }

}
