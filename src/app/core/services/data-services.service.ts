import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  constructor(private http: HttpClient) {
  }

  public getData(str: string): Observable<object> {
    return this.http.get(`https://www.superheroapi.com/api.php/959708931182410/search/${str}`)
  }

  public getById(id: number): Observable<object> {
    return this.http.get(`https://www.superheroapi.com/api.php/959708931182410/${id}`)
  }
}
