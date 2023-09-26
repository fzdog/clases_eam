import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    SidenavModule,
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
