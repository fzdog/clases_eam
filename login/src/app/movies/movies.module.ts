import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { PopularComponent } from './popular/popular.component';

@NgModule({
  declarations: [
    ViewMovieComponent,
    PopularComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
