import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationComponent } from './reservation/reservation.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { LoginComponent } from './login/login.component';
import {appRoutes} from './app-routing.module';
import {LoginService} from './common/login.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ReservationComponent,
    EditComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
