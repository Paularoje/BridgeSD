import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespachosVendedorPageRoutingModule } from './despachos-vendedor-routing.module';

import { DespachosVendedorPage } from './despachos-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespachosVendedorPageRoutingModule
  ],
  declarations: [DespachosVendedorPage]
})
export class DespachosVendedorPageModule {}
