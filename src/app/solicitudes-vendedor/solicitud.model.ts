export interface Solicitud{
  id: string;
  cliente: string;
  direccion: string;
  producto: string;
  cantidad: number;
  unidadesRef: string;
  precio: number;
  total: number;
  imageURL: string;
  fechaDespacho: string;
}
