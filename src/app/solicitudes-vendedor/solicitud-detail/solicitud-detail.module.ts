import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudDetailPageRoutingModule } from './solicitud-detail-routing.module';

import { SolicitudDetailPage } from './solicitud-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudDetailPageRoutingModule
  ],
  declarations: [SolicitudDetailPage]
})
export class SolicitudDetailPageModule {}
