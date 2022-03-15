import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { alfa } from '../catalogo-comprador.model';
import { CatalogoService } from '../catalogo.service';

import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  producto: alfa;
  calific: number;

  constructor(private activatedRoute: ActivatedRoute, private productosService:
    CatalogoService, private router: Router,  public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId=paramMap.get('productoId');
      this.producto=this.productosService.getProducto(recipeId);
      this.calific=this.productosService.getCalificacion(recipeId);
      console.log(this.producto)
    });
  }

}
