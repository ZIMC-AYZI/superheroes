import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class MyToastrService {

  constructor(
    private toastr: ToastrService
  ) {
  }
  public createMessage(message: string, title: string, timeOut: number, position): object {
    return this.toastr.info(message, title, {
      timeOut: timeOut,
      positionClass: position,
    });
  }
}
