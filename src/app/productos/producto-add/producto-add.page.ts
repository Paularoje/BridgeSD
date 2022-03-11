import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductosService } from '../productos.service';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.page.html',
  styleUrls: ['./producto-add.page.scss'],
})
export class ProductoAddPage implements OnInit {
  infoUser = JSON.parse(localStorage.getItem('usuario'));

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private productosService: ProductosService, public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }
  async saveNewProducto(title, imageURL, descripcion, cantidad, unidadesRef, precio){
    const alert = await this.alertController.create({
      header: '¿Estás seguro de añadir el producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Añadir',
          handler: () =>{
            const precioSugerido=precio.value*1.05;
            const vendedor=this.infoUser.nombre;
            // eslint-disable-next-line max-len
            this.productosService.addProducto(title.value, descripcion.value, cantidad.value, unidadesRef.value, precio.value, precioSugerido, imageURL.value, vendedor);
            this.router.navigate(['/menu/productos']);
          }
        }
      ]
    });
    await alert.present();
    return;
  }
}
