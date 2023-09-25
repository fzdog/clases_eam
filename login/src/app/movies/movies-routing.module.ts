import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMovieComponent } from './view-movie/view-movie.component';

const routes: Routes = [
  {
    path:'movie/:id/',component:ViewMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
