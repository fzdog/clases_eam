import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    /**IMPORTANTE: cuando la aplicacion cargue la ruta
       * http://localhost:4200/dashboard/search vamos a cargar el componente: PopularComponent
       * */
    path: 'searching/:keyword', component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
