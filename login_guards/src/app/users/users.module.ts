import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { UserComponent } from './user/user.component';
import { CustomerComponent } from './customer/customer.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserAdminComponent,
    UserComponent,
    CustomerComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
