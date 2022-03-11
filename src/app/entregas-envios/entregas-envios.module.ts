import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregasEnviosPageRoutingModule } from './entregas-envios-routing.module';

import { EntregasEnviosPage } from './entregas-envios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregasEnviosPageRoutingModule
  ],
  declarations: [EntregasEnviosPage]
})
export class EntregasEnviosPageModule {}
