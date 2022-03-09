export interface Producto{
  id: string;
  title: string;
  cantidad: number;
  unidadesRef: string;
  precio: number;
  precioSugerido: number;
  imageURL: string;
  calificacion: number;
  comments: string[];
  nameVend: string;
}
