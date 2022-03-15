import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';
@Injectable({
  providedIn: 'root'
})
export class NoticiaSsService {

  public ofertas: Noticia[] = [
    {
      id : '1',
      titulo: 'Exportaciones del agro crecieron 24% impulsadas por productos no tradicionales que aumentaron 31% en enero de 2022',
      descripcion: 'Durante el Gobierno del presidente Iván Duque se han logrado 59 nuevas admisibilidades de productos agro a 28 países.',
      imagePro : 'https://www.minagricultura.gov.co/noticias/PublishingImages/Foto%20MinAgricultura%20Rodolfo%20Zea%20Navarro%20en%20inauguracio%cc%81n%20agencia%20comercial%20agro%20de%20cundinamarca%2015%20de%20julio%20web.jpeg'
    },
    {
      id : '2',
      titulo: 'MinAgricultura consolida estrategia para disminución de importaciones de soya y maíz.',
      descripcion: 'Estos productos son insumos claves para la industria de alimentos balanceados que son utilizados en la producción de aves, cerdos y algunos bovinos',
      imagePro: 'https://www.minagricultura.gov.co/noticias/PublishingImages/Cortar%20foto%20MinAgricltura%20Rodolfo%20Zea%20Navarro%20soya%20maiz%202%20de%20marzo%202022%20web.jpeg'
    },
    {
      id : '3',
      titulo: 'Colombia registró la mayor producción de cacao de la historia, en el último año cacaotero.',
      descripcion: 'El ministro de Agricultura, Rodolfo Zea, se mostró muy complacido con el resultado de la producción de cacao en el último año cacaotero (octubre 2020 a septiembre de 2021), la cual es la más grande de toda la historia productiva del grano en Colombia',
      imagePro : 'https://www.minagricultura.gov.co/noticias/PublishingImages/caco%20Minagricultura%20wp45.jpg',
    },
    {
      id : '4',
      titulo: 'Gobierno Nacional anunció nuevos alivios financieros para los pequeños y medianos productores del campo',
      descripcion : ' El nuevo Decreto 1730, surge de la Ley de Alivios Financieros sancionada a finales de 2020 y promovida por el ministro de Agricultura, Rodolfo Zea Navarro.',
      imagePro : 'https://www.minagricultura.gov.co/noticias/PublishingImages/mujer%20rural%204%20wp.jpg',

    },
  ];

  constructor() { }

  getTodasOfertas() {
    return [...this.ofertas]
  }
  
  getOferta(productoId: String) {
    return{
      ...this.ofertas.find(producto => {
      return producto.id === productoId
    })
    }
  }

  addOferta(){

  }

  deleteOferta(productoId : String){
    
  }
}
