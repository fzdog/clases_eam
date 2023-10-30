import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainUserAdminComponent } from './main-user-admin/main-user-admin.component';


@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidenavComponent, MainUserAdminComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [DashboardComponent, HeaderComponent, SidenavComponent]
})
export class DashboardModule { }
