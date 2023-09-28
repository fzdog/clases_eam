import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,FormsModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchModule { }
