import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

//page importada de ofertas
import { OfertasPage } from '../ofertas/ofertas.page';

@Component({
  selector: 'app-inicio-transportador',
  templateUrl: './inicio-transportador.page.html',
  styleUrls: ['./inicio-transportador.page.scss'],
})

export class InicioTransportadorPage implements OnInit {

  public ofertas = [
    {
      id : '1',
      rol1 : 'Vendedor:',
      name1 : 'Jairo Anibal Gomez',
      rol2 : 'Comprador:',
      name2 : 'Marta Lucia Peña',
      from : 'Desde:',
      desde : 'Vereda Rio Grande, Rionegro, Santander',
      to : 'Hasta:',
      hasta : 'Cra 12 #15-23, Bucaramanga',
      final : '50 Racimos Platano Verde',
      // eslint-disable-next-line max-len
      imageUrl : 'https://www.semana.com/resizer/AEcetmUovCztZonFY6mq2ZpQMGo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/JX7PPPXC7NAGJA5FMFEOJKQGLI.PNG'
    }
  ];

  constructor( public router: Router, private menu: MenuController, public modalController: ModalController) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.open();
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: OfertasPage,
      cssClass: 'my-modal-class'
    });
    return await modal.present();
  }

}
