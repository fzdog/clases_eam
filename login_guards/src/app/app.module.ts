import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RestrictedComponent } from './restricted/restricted.component';
import { MainUserAdminComponent } from './main-user-admin/main-user-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    RestrictedComponent,
    MainUserAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
