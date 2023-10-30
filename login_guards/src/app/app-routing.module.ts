import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { authGuard } from './auth/auth.guard';
import { RestrictedComponent } from './restricted/restricted.component';
import { MainUserAdminComponent } from './dashboard/main-user-admin/main-user-admin.component';
import { Utils } from './utils/utils';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path: 'dashboard', component: DashboardComponent,
    canActivate:[authGuard],
    children: [
      {
        path: '', component: MainComponent,
        canMatch: [()=> Utils.isRole('user')]
      },
      {
        path: '', component: MainUserAdminComponent,
        canMatch:[()=>Utils.isRole('admin')]
      },
      {
        path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  {
    path: 'restricted', component:RestrictedComponent
  },
  {
    path: 'logout', redirectTo:'/login', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
