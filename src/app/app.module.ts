import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HeaderModule} from "./core/components/header/header.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./core/services/auth.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LoginPageModule} from "./pages/login-registration-page/login-page.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeaderModule,
    LoginPageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
