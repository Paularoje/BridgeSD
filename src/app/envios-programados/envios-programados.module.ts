import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviosProgramadosPageRoutingModule } from './envios-programados-routing.module';

import { EnviosProgramadosPage } from './envios-programados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviosProgramadosPageRoutingModule
  ],
  declarations: [EnviosProgramadosPage]
})
export class EnviosProgramadosPageModule {}
