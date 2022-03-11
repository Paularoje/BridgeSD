import { Injectable } from '@angular/core';
import { Solicitud } from './solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  public fechasDespacho: string[];

  public solicitudes: Solicitud[] = [
    {
      id: '1',
      cliente: 'Marta',
      direccion: 'Cra 28 C #34-56, Bucaramanga',
      producto: 'Papa pastusa',
      cantidad: 10,
      unidadesRef: 'Kilogramos',
      precio: 4000,
      total: 10*4000,
      imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
      fechaDespacho: null,
    },
    {
      id: '3',
      cliente: 'Marta',
      direccion: 'Cra 28 C #34-56, Bucaramanga',
      producto: 'Mandarina criolla',
      cantidad: 5,
      unidadesRef:'Canasta (13 kg cada una)',
      precio: 20000,
      total: 5*20000,
      imageURL: 'https://fruvery.com.co/wp-content/uploads/2020/06/mandarina.jpg',
      fechaDespacho: null,
    }
  ];

  public entregas: Solicitud[];

  constructor() { }

  getSolicitudes(){
    return [...this.solicitudes];
  }

  getsolicitud(solicitudId: string){
    return{
      ...this.solicitudes.find(solicitud => solicitud.id === solicitudId)
    };
  }

  // eslint-disable-next-line max-len

  deleteSolicitud(solicitudId: string){
    this.solicitudes =this.solicitudes.filter(solicitud =>solicitud.id !== solicitudId);
  }

  addFecha(solicitudId: string, fecha: string){
    this.fechasDespacho[solicitudId+0]=fecha;
  }

  // eslint-disable-next-line max-len
  guardarEntrega(cliente: string, direccion: string, producto: string, cantidad: number, unidadesRef: string, precio: number, total: number, imageURL: string, fechaDespacho: string){
    this.entregas.push({
      cliente,
      direccion,
      producto,
      cantidad,
      unidadesRef,
      precio,
      total,
      imageURL,
      fechaDespacho,
      id: this.solicitudes.length+1+''
    });
  }
}
