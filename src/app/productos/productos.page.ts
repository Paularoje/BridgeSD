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

  constructor(private productoService: ProductosService) { }

  updateSearchResults() {
     console.log(this.autocomplete.input);    //search input will display
  }

  ngOnInit() {
    this.productos=this.productoService.getProductos();
  }

}
