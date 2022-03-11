import { Component, OnInit } from '@angular/core';
import { Oferta } from '../ofertas/oferta.model'

@Component({
  selector: 'app-solicitudes-espera',
  templateUrl: './solicitudes-espera.page.html',
  styleUrls: ['./solicitudes-espera.page.scss'],
})
export class SolicitudesEsperaPage implements OnInit {

  oferta: Oferta;

  public ofertas = [
    {
      id : '2',
      rol1 : 'Vendedor:',
      name1 : 'Camilo Ramirez',
      rol2 : 'Comprador:',
      name2 : 'Raul Diaz',
      from : 'Desde:',
      desde : 'San Bernardo, Norte de Santander',
      to : 'Hasta:',
      hasta : 'Cra 12 #15-23, Bucaramanga',
      final : '50 Racimos',
      producto: 'Platano Verde',
      imageUrl1 : 'https://comisiondelaverdad.co/images/zoo/noticias/images/Campesinos-foto-luna1.jpg',
      imageUrl2 : 'https://pymstatic.com/44253/conversions/xavier-molina-medium.jpg',
      imagePro : 'https://www.semana.com/resizer/AEcetmUovCztZonFY6mq2ZpQMGo=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/JX7PPPXC7NAGJA5FMFEOJKQGLI.PNG',
      dia : '20/Ene/22',
      hora : '9:00 am'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}