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
  activo: string;
  oferta_volumen:string;
  envase_nuevo:string;
  escala_descuento:string;
  oferta_lanzamiento:string;
  agotar_stock:string;
  embarque:string;
  fragancias:string;
  talles:string;
  created_at: string;
  updated_at: string;
  cantidad:number = 0;

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

  setCantidad(cantidad){
    this.cantidad = cantidad;
  }

  getCantidad(){
    return this.cantidad;
  }

  setOfertaVolumen(oferta_volumen){
    this.oferta_volumen = oferta_volumen;
  }
  getOfertaVolumen(){
    return this.oferta_volumen;
  }

  setEnvaseNuevo(envase_nuevo){
    this.envase_nuevo = envase_nuevo;
  }

  getEnvaseNuevo(){
    return this.envase_nuevo;
  }

  setEscalaDescuento(escala_descuento){
    this.escala_descuento = escala_descuento;
  }

  getEscalaDescuento(){
    return this.escala_descuento;
  }

  setOfertaLanzamiento(oferta_lanzamiento){
    this.oferta_lanzamiento = oferta_lanzamiento;
  }

  getOfertaLanzamiento(){
    return this.oferta_lanzamiento;
  }

  setAgotarStock(agotar_stock){
    this.agotar_stock = agotar_stock;
  }

  getAgotarStock(){
    return this.agotar_stock;
  }

   setEmbarque(embarque){
     this.embarque = embarque;
   }

   getEmbarque(){
     return this.embarque;
   }
}
