import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from '../users/users/users.component';
import { UserAdminComponent } from '../users/user-admin/user-admin.component';
import { CustomerComponent } from '../users/customer/customer.component';
import { UserComponent } from '../users/user/user.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent
  },
  {
    path: 'user-admin', component: UserAdminComponent
  },
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'user', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
