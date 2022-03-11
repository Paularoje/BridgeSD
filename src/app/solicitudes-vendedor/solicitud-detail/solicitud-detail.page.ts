import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonDatetime, NavController } from '@ionic/angular';
import { Solicitud } from '../solicitud.model';
import { SolicitudesService } from '../solicitudes.service';

@Component({
  selector: 'app-solicitud-detail',
  templateUrl: './solicitud-detail.page.html',
  styleUrls: ['./solicitud-detail.page.scss'],
})
export class SolicitudDetailPage implements OnInit {
  solicitud: Solicitud;

  constructor(private solicitudesService: SolicitudesService,
    private router: Router,  public alertController: AlertController,
    public navCtrl: NavController) {}

  ngOnInit() {
  }
  async deleteSolicitud(){
    const alert = await this.alertController.create({
      header: '¿Estás seguro de querer eliminar la solicitud?',
      message: 'Sé cuidadoso',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () =>{
            this.solicitudesService.deleteSolicitud(this.solicitud.id);
            this.navCtrl.navigateRoot('/productos');
          }
        }
      ]
    });
    await alert.present();
    return;
  }

  // eslint-disable-next-line max-len
  async guardar(id: string,cliente: string, direccion: string, producto: string, cantidad: number, unidadesRef: string, precio: number, total: number, imageURL: string, fecha: IonDatetime){
    const alert = await this.alertController.create({
      header: '¿Estás seguro de aceptar solicitud?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: () =>{
            this.solicitudesService.addFecha(id,fecha.toString());
            // eslint-disable-next-line max-len
            this.solicitudesService.guardarEntrega(cliente,direccion,producto, cantidad,unidadesRef,precio,total,imageURL, fecha.toString());
            this.router.navigate(['/menu/solicitudes-vendedor']);
          }
        }
      ]
    });
    await alert.present();
    return;
  }

}
