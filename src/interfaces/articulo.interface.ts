export class Articulo{

  codigo: string;
  descripcion: string;
  descripcion_adicional: string;
  imagen: string;
  precio: string;
  precio2: string;
  precio3: string;
  id_marca: string;
  nombreMarca: string;
  id_categoria: string;
  nombreCategoria: string;
  activo: boolean;
  oferta_volumen:boolean;
  envase_nuevo:boolean;
  escala_descuento:boolean;
  oferta_lanzamiento:boolean;
  agotar_stock:boolean;
  embarque:boolean;
  fragancias:boolean;
  talles:string;
  created_at: string;
  updated_at: string;

  constructor(){

  }

  setCodigo(codigo){
  this.codigo=codigo;
  }

  getCodigo(){
  return this.codigo;
  }

  setDescripcion(descripcion){
  this.descripcion = descripcion;
  }

  getDescripcion(){
  return this.descripcion;
  }

  setDescripcionAdicional(descripcionAdicional){
  this.descripcion_adicional = descripcionAdicional;
  }

  getDescripcionAdicional(){
  return this.descripcion_adicional;
  }

  setImagen(imagen){
  this.imagen = imagen;
  }

  getImagen(){
  return this.imagen;
  }

  setPrecio(precio){
  this.precio = precio;
  }

  getPrecio(){
  return this.precio;
  }

  setPrecio2(precio){
  this.precio2 = precio;
  }

  getPrecio2(){
  return this.precio2;
  }

  setPrecio3(precio){
  this.precio3 = precio;
  }

  getPrecio3(){
  return this.precio3;
  }
}
