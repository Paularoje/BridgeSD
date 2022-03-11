import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'ofertas',
    children: [
      {
        path: '',
        loadChildren: () => import('./ofertas/ofertas.module').then( m => m.OfertasPageModule),
      },
      {
        path: ':productoId',
        loadChildren: () => import('./ofertas/detalle-oferta/detalle-oferta.module').then( m => m.DetalleOfertaPageModule)
      }
    ],
    canActivate: [IngresadoGuard]
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'informacion-personal',
    loadChildren: () => import('./informacion-personal/informacion-personal.module').then( m => m.InformacionPersonalPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'solicitudes-vendedor',
    loadChildren: () => import('./solicitudes-vendedor/solicitudes-vendedor.module').then( m => m.SolicitudesVendedorPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'despachos-vendedor',
    loadChildren: () => import('./despachos-vendedor/despachos-vendedor.module').then( m => m.DespachosVendedorPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'productos',
    children: [
      {
        path: '',
        loadChildren: () => import('./productos/productos.module').then( m => m.ProductosPageModule)
      },
      {
        path: ':productoId',
        loadChildren: () => import('./productos/producto-detail/producto-detail.module').then( m => m.ProductoDetailPageModule)
      }
    ],
    canActivate: [IngresadoGuard]
  },
  {
    path: 'solicitudes-espera',
    loadChildren: () => import('./solicitudes-espera/solicitudes-espera.module').then( m => m.SolicitudesEsperaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'envios-programados',
    loadChildren: () => import('./envios-programados/envios-programados.module').then( m => m.EnviosProgramadosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'entregas-envios',
    loadChildren: () => import('./entregas-envios/entregas-envios.module').then( m => m.EntregasEnviosPageModule),
    canActivate: [IngresadoGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
