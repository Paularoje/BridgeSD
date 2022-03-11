import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudDetailPage } from './solicitud-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudDetailPageRoutingModule {}
