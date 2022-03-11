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
      // {
      //   path: 'inicio-vendedor',
      //   loadChildren: () => import('../inicio-vendedor/inicio-vendedor.module').then( m => m.InicioVendedorPageModule),
      //   canActivate: [IngresadoGuard]
      // },
      {
        path: 'productos',
        children: [
          {
            path: '',
            loadChildren: () => import('../productos/productos.module').then( m => m.ProductosPageModule)
          },
          {
            path: ':productoId',
            loadChildren: () => import('../productos/producto-detail/producto-detail.module').then( m => m.ProductoDetailPageModule)
          }
        ],
        canActivate: [IngresadoGuard]
      },
      {
        path: 'new-producto',
        loadChildren: () => import('../productos/producto-add/producto-add-routing.module').then(m => m.ProductoAddPageRoutingModule),
        canActivate: [IngresadoGuard]
      },
      {
        path: 'solicitudes-vendedor',
        children: [
          {
            path: '',
            loadChildren: () => import('../solicitudes-vendedor/solicitudes-vendedor.module').then( m => m.SolicitudesVendedorPageModule),
          },
          {
            path: ':solicitudId',
            // eslint-disable-next-line max-len
            loadChildren: () => import('../solicitudes-vendedor/solicitud-detail/solicitud-detail.module').then( m => m.SolicitudDetailPageModule)
          }
        ],
        canActivate: [IngresadoGuard]
      },
      {
        path: 'despachos-vendedor',
        loadChildren: () => import('../despachos-vendedor/despachos-vendedor.module').then( m => m.DespachosVendedorPageModule),
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
