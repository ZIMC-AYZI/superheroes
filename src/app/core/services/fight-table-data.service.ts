import {Injectable} from "@angular/core";
import {TableDataModels} from "../../models/table-data-models";

@Injectable({
  providedIn: 'root'
})
export class FightTableDataService {
  private fightsData: TableDataModels[] = localStorage.getItem('fight-data') ? JSON.parse(localStorage.getItem('fight-data')) : [];

  setToLocalStorage(obj: TableDataModels) {
    this.fightsData.push(obj);
    localStorage.setItem('fight-data', JSON.stringify(this.fightsData))
  }
  getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('fight-data'))
  }
}
