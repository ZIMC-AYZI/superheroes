import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  constructor(private http: HttpClient) { }

  getData(str) {
    return this.http.get(`https://www.superheroapi.com/api.php/959708931182410/search/${str}`)
  }

}
