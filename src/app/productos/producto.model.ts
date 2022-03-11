export interface Producto{
  id: string;
  title: string;
  descripcion: string;
  cantidad: number;
  unidadesRef: string;
  precio: number;
  precioSugerido: number;
  imageURL: string;
  comments: string[];
  starts: number[];
  nameVend: string;
}
