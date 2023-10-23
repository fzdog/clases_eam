import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { authGuardGuard } from './auth/auth-guard.guard';
import { RestrictedComponent } from './restricted/restricted.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path: 'dashboard', component: DashboardComponent,
    canActivate:[authGuardGuard],
    children: [
      {
        path: '', component: MainComponent,
        canMatch: [() => Utils.isRole('user')],
      },
      {
        path: '', component: MainUserAdminComponent,
        canMatch: [() => Utils.isRole('admin')],
      },

      {
        path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  {
    path: 'restricted', component:RestrictedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
