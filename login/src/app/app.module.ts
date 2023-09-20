import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { SidenavModule } from './sidenav/sidenav.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, FormsModule,
    HttpClientModule,
    DashboardModule,
    HeaderModule,
    LoginModule,
    MainModule,
    SidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
