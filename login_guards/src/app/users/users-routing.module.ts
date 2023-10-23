import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  /*{
    path: '', component: MainComponent
  },*/
  {
    path: 'admin-user', component: UserAdminComponent
  },
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'ti-user', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
