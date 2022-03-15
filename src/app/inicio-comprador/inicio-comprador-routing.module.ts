import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioCompradorPage } from './inicio-comprador.page';

const routes: Routes = [
  {
    path: '',
    component: InicioCompradorPage
  },
  {
    path: 'detalles',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioCompradorPageRoutingModule {}
