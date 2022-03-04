import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesVendedorPageRoutingModule } from './solicitudes-vendedor-routing.module';

import { SolicitudesVendedorPage } from './solicitudes-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesVendedorPageRoutingModule
  ],
  declarations: [SolicitudesVendedorPage]
})
export class SolicitudesVendedorPageModule {}
