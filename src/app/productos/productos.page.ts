import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  autocomplete: { input: string };

  productos=[];
  calific=[];

  constructor(private productoService: ProductosService) { }

  updateSearchResults() {
     console.log(this.autocomplete.input);    //search input will display
  }

  ngOnInit() {
    this.productos=this.productoService.getProductos();
    this.calificacion();
  }
  ionViewWillEnter(){
    this.productos=this.productoService.getProductos();
    this.calificacion();
  }
  calificacion(){
    const prod=this.productoService.getProductos();
    for (let i=0; i<prod.length; i++) {
      this.calific[i]=this.productoService.getCalificacion(prod[i].id);
    }
  }
}
