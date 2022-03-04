import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespachosVendedorPage } from './despachos-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: DespachosVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespachosVendedorPageRoutingModule {}
