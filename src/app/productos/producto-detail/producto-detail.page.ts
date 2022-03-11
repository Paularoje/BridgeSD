import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Producto } from '../producto.model';
import { ProductosService } from '../productos.service';

import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.page.html',
  styleUrls: ['./producto-detail.page.scss'],
})
export class ProductoDetailPage implements OnInit {
  producto: Producto;
  calific: number;

  constructor(private activatedRoute: ActivatedRoute, private productosService:
    ProductosService, private router: Router,  public alertController: AlertController,
    public navCtrl: NavController) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId=paramMap.get('productoId');
      this.producto=this.productosService.getProducto(recipeId);
      this.calific=this.productosService.getCalificacion(recipeId);
    });
  }

  async deleteProducto(){
    const alert = await this.alertController.create({
      header: '¿Estás seguro de querer eliminar el producto?',
      message: 'Sé cuidadoso',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () =>{
            this.productosService.deleteProducto(this.producto.id);
            this.navCtrl.navigateRoot('/productos');
          }
        }
      ]
    });
    await alert.present();
    return;
  }

}
