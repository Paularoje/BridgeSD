import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Producto } from '../producto.model';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.page.html',
  styleUrls: ['./producto-detail.page.scss'],
})
export class ProductoDetailPage implements OnInit {
  producto: Producto;

  constructor(private activatedRoute: ActivatedRoute, private productosService:
    ProductosService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //redirect
      const recipeId=paramMap.get('productoId');
      this.producto=this.productosService.getProducto(recipeId);
      console.log(this.producto);
    });
  }

}
