import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { Utils } from '../utils/utils';
import { deactivateGuard } from '../auth/deactivate.guard';

const routes: Routes = [
  /*{
    path: '', component: MainComponent
  },*/
  {
    path: 'admin-user', component: UserAdminComponent,
    canMatch: [() => Utils.isRole('admin')]
  },
  {
    path: 'customer', component: CustomerComponent
  },
  {
    path: 'ti-user', component: UserComponent,
    canDeactivate:[deactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
