import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntregasEnviosPage } from './entregas-envios.page';

const routes: Routes = [
  {
    path: '',
    component: EntregasEnviosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntregasEnviosPageRoutingModule {}
