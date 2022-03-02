import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresadoGuard } from '../ingresado.guard';
import { NoIngresadoGuard } from '../no-ingresado.guard';

import { MenuPage } from './menu.page';

//canActivate: [IngresadoGuard]
//canActivate: [NoIngresadoGuard]
const routes: Routes = [
  {
    path: '',
    component: MenuPage,

    children: [
      {
        path: 'informacion-personal',
        loadChildren: () => import('../informacion-personal/informacion-personal.module').then( m => m.InformacionPersonalPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: 'inicio-comprador',
        loadChildren: () => import('../inicio-comprador/inicio-comprador.module').then(m => m.InicioCompradorPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: 'inicio-transportador',
        loadChildren: () => import('../inicio-transportador/inicio-transportador.module').then( m => m.InicioTransportadorPageModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: 'inicio-vendedor',
        loadChildren: () => import('../inicio-vendedor/inicio-vendedor.module').then( m => m.InicioVendedorPageModule),
        canActivate: [IngresadoGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {
  infoUser = JSON.parse(localStorage.getItem('usuario'));
}
