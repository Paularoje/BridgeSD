import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesEsperaPage } from './solicitudes-espera.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesEsperaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesEsperaPageRoutingModule {}
