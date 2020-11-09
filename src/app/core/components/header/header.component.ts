import {Component} from '@angular/core';
import {myRoutes} from "../../routes/routes";
import {Router} from "@angular/router";
import {MyToastrService} from "../../services/my-toastr.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  constructor(
    private router: Router,
    private myToastrService: MyToastrService
  ) {
  }


  goBattle() {
    if (localStorage.getItem('fight-hero')){
      this.router.navigate([myRoutes.battlePage.routerPath])
    } else {
      this.myToastrService.createMessage(
        'Если хотите попасть в битву',
        'Выберите героя для боя'
      );
    }
  }
}
