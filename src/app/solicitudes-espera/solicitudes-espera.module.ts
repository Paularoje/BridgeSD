import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesEsperaPageRoutingModule } from './solicitudes-espera-routing.module';

import { SolicitudesEsperaPage } from './solicitudes-espera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesEsperaPageRoutingModule
  ],
  declarations: [SolicitudesEsperaPage]
})
export class SolicitudesEsperaPageModule {}
