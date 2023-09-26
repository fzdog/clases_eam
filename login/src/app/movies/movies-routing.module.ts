import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  {
    /**IMPORTANTE: cuando la aplicacion cargue la ruta
       * http://localhost:4200/dashboard/movies vamos a cargar el componente: PopularComponent
       * */
    path:'', component:PopularComponent
  },
  {
    path:'movie/:id',component:ViewMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
