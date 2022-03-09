import { Injectable } from '@angular/core';
import {Producto} from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos: Producto[] = [
    {
      id: '1',
      title: 'Naranja valenciana',
      cantidad: 10,
      unidadesRef:'Canasta (11 kg cada una)',
      precio: 20000,
      precioSugerido: 30000,
      imageURL: 'https://aleluyamarket.com/wp-content/uploads/2021/06/Naranja-Valencia.jpg',
      calificacion: 5,
      comments: ['Naranjas deliciosas', 'Buen precio'],
      nameVend: 'Pedro Gutierrez'
    },
    {
      id: '2',
      title: 'Papa pastusa',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 4000,
      precioSugerido: 4000,
      imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
      calificacion: 5,
      comments: ['Papas deliciosas', 'Buen precio'],
      nameVend: 'Pedro Gutierrez'
    },
    {
      id: '3',
      title: 'Mandarina arrayana',
      cantidad: 10,
      unidadesRef:'Canasta (13 kg cada una)',
      precio:20000,
      precioSugerido: 32000,
      imageURL: 'https://fruvery.com.co/wp-content/uploads/2020/06/mandarina.jpg',
      calificacion: 5,
      comments: ['Es un poco costosa, pero vale la pena pagar por ellas'],
      nameVend: 'Juan Alberto Sanchez'
    },
    {
      id: '4',
      title: 'Cebolla junca',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 4000,
      precioSugerido: 3500,
      imageURL: 'https://static.merqueo.com/images/products/large/fa56a8fd-b80a-4e9a-a542-fd73be0551fa.jpg',
      calificacion: 5,
      comments: ['Cebolla de buena calidad'],
      nameVend: 'Juan Alberto Sanchez'
    },
    {
      id: '5',
      title: 'Yuca',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 3000,
      precioSugerido: 3000,
      imageURL: 'https://vivecol.com.co/wp-content/uploads/2020/07/image165.png',
      calificacion: 5,
      comments: ['Deliciosa yuca'],
      nameVend: 'Juan Alberto Sanchez'
    }
  ];

  constructor() { }

  getProductos(){
    return [...this.productos];
  }

  getProducto(productoId: string){
    return{
      ...this.productos.find(producto => producto.id === productoId)
    };
  }

  // eslint-disable-next-line max-len
  addProducto(title: string, cantidad: number, unidadesRef: string, precio: number, precioSugerido: number, imageURL: string, calificacion: number, nameVend: string){
    this.productos.push({
      title,
      cantidad,
      unidadesRef,
      precio,
      precioSugerido,
      imageURL,
      calificacion,
      comments:[],
      nameVend,
      id: this.productos.length+1+''
    });
  }

  deleteProducto(productoId: string){
    this.productos =this.productos.filter(producto =>producto.id !== productoId);
  }
}
