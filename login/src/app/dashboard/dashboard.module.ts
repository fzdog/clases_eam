import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainModule } from '../main/main.module';
import { HeaderModule } from '../header/header.module';
import { SidenavModule } from '../sidenav/sidenav.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MainModule,
    HeaderModule,
    SidenavModule
  ], exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
