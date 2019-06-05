export class Localidad{

  codigo: number;
  nombre: string;
  created_at: string;
  updated_at: string;
  provincia: number;
  zona: number;
  zona2: number;
  zona3: number;

  constructor(){
  }

  setCodigo(codigo){
  this.codigo=codigo;
  }

  getCodigo(){
  return this.codigo;
  }

  setNombre(nombre){
    this.nombre=nombre;
  }

  getNombre(){
    return this.nombre;
  }

  setProvincia(provincia){
    this.provincia=provincia;
  }

  getProvincia(){
    return this.provincia;
  }

  setZona(zona){
    this.zona=zona;
  }

  getZona(){
    return this.zona;
  }

  setZona2(zona2){
    this.zona2=zona2;
  }

  getZona2(){
    return this.zona2;
  }

  setZona3(zona3){
    this.zona3=zona3;
  }

  getZona3(){
    return this.zona3;
  }
}
