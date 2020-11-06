import {Component} from '@angular/core';
import {myRoutes} from "../../routes/routes";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {
  }


  goBattle() {
    if (localStorage.getItem('fight-hero')){
      this.router.navigate([myRoutes.battlePage.routerPath])
    } else {
      this.toastr.info('Если хотите попасть в битву', `Выберите героя для боя`, {
        timeOut: 2000,
        positionClass: 'toast-top-center',
      });
    }
  }
}
