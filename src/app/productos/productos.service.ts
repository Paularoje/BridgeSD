import { Injectable } from '@angular/core';
import {Producto} from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public productos: Producto[] = [
    {
      id: '1',
      title: 'Naranja valencia',
      descripcion: 'Naranja deliciosa del Carmen de Chucurí',
      cantidad: 10,
      unidadesRef:'Canasta (11 kg cada una)',
      precio: 20000,
      precioSugerido: 30000,
      imageURL: 'https://aleluyamarket.com/wp-content/uploads/2021/06/Naranja-Valencia.jpg',
      comments: ['Naranjas deliciosas', 'Buen precio'],
      starts: [5,4],
      nameVend: 'Maria'
    },
    {
      id: '2',
      title: 'Papa pastusa',
      descripcion: 'Papa pastusa deliciosa del Carmen de Chucurí',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 4000,
      precioSugerido: 4000,
      imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
      comments: ['Papas deliciosas', 'Buen precio'],
      starts: [5,5],
      nameVend: 'Maria'
    },
    {
      id: '3',
      title: 'Mandarina criolla',
      descripcion: 'Mandarina deliciosa del Carmen de Chucurí',
      cantidad: 10,
      unidadesRef:'Canasta (13 kg cada una)',
      precio:20000,
      precioSugerido: 32000,
      imageURL: 'https://fruvery.com.co/wp-content/uploads/2020/06/mandarina.jpg',
      comments: ['Es un poco costosa, pero vale la pena pagar por ellas'],
      starts: [5],
      nameVend: 'Juan Alberto Sanchez'
    },
    {
      id: '4',
      title: 'Cebolla junca',
      descripcion: 'Cebolla junca deliciosa del Carmen de Chucurí',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 4000,
      precioSugerido: 3500,
      imageURL: 'https://static.merqueo.com/images/products/large/fa56a8fd-b80a-4e9a-a542-fd73be0551fa.jpg',
      comments: [],
      starts: [],
      nameVend: 'Juan Alberto Sanchez'
    },
    {
      id: '5',
      title: 'Yuca',
      descripcion: 'Yuca deliciosa del Carmen de Chucurí',
      cantidad: 50,
      unidadesRef:'Kilogramos',
      precio: 3000,
      precioSugerido: 3000,
      imageURL: 'https://vivecol.com.co/wp-content/uploads/2020/07/image165.png',
      comments: ['Deliciosa yuca'],
      starts: [4],
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
  addProducto(title: string, descripcion: string, cantidad: number, unidadesRef: string, precio: number, precioSugerido: number, imageURL: string, nameVend: string){
    this.productos.push({
      title,
      descripcion,
      cantidad,
      unidadesRef,
      precio,
      precioSugerido,
      imageURL,
      comments:[],
      starts:[],
      nameVend,
      id: this.productos.length+1+''
    });
  }

  deleteProducto(productoId: string){
    this.productos =this.productos.filter(producto =>producto.id !== productoId);
  }

  getCalificacion(productoId: string): number{
    const prod=this.productos.find(producto => producto.id === productoId);
    let sum: number;
    sum=0;
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<prod.starts.length; i++) {
      sum=sum+Number(prod.starts[i]);
    }
    return sum/prod.starts.length;
  }
}
