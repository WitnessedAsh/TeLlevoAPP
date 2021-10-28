import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosPerPage } from './datos-per.page';

const routes: Routes = [
  {
    path: '',
    component: DatosPerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosPerPageRoutingModule {}
