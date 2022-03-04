import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit() {
  }

  // eslint-disable-next-line max-len
  // saveNewProducto(title: HTMLInputElement, cantidad: HTMLInputElement, unidadesRef: HTMLInputElement, precio: HTMLInputElement, imageURL: HTMLInputElement, nameVend: HTMLInputElement) {
  //   this.productosService.addProducto(title.value, cantidad.value, unidadesRef.value, precio.value, imageURL.value, nameVend.value);
  //   this.router.navigate(['/productos']);
  // }

}
