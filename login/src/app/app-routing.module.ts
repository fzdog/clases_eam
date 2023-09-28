import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      /**IMPORTANTE: cuando la aplicacion cargue la ruta
       * http://localhost:4200/dashboard lo vamos a redireccionar a su hijo: movies
       * */
      {
        path: '', redirectTo: '/dashboard/movies', pathMatch: 'full'
      },
      {
        path: 'movies', loadChildren: () => import('./movies/movies.module').then(m=>m.MoviesModule)
      },
      {
        path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
