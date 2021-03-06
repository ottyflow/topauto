import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ArticulosProvider {

  articulos = [];
  articulosFinal = [];
  fragancias = [];
  talles = [];
  unarticulo: any;
  codigoarticulo: any;
  count: number = 0;

  constructor(public http: Http) {
  }

  cargar_articulos() {
    this.count = 0;
    this.articulos = new Array();
    let url = URL_SERVICIOS + "/productos";
    return this.http.get(url).map(resp => resp.json()).subscribe(data => {
      if (data.error) {
      } else {
        for (let item of data.productos) {
          this.articulos.push(item);
        }
        this.articulosFinal = new Array();
        for (let i = 0; i < 20; i++) {  // here you can limit the items according to your needs.
          this.articulosFinal.push(this.articulos[this.count]);   // your JSON data which you want to display
          this.count++ //i am using a count variable to keep track of inserted records to avoid inserting duplicate records on infinite scroll
        }
      }
    })
  }

  cargar_talles(codigoarticulo: any) {
    this.talles = new Array();
    let url = URL_SERVICIOS + "/productos/tallesxart/" + codigoarticulo;
    return this.http.get(url).map(resp => resp.json()).subscribe(data => {
      if (data.error) {
      } else {
        console.log(data);
        for (let item of data){
          this.talles.push(item);
        }
        for(let item of this.talles){
          item.cantidad = 0;
        }
        console.log(this.talles);
      }
    })
  }

  cargar_fragancias(codigoarticulo: any){
    this.fragancias = new Array();
    let url = URL_SERVICIOS + "/fragancias/fraganciasxart/" + codigoarticulo;
    return this.http.get(url).map(resp => resp.json()).subscribe(data => {
      if (data.error) {
      } else {
        console.log(data);
        for (let item of data){
          this.fragancias.push(item);
        }
        for(let item of this.fragancias){
          item.cantidad = 0;
        }
        console.log(this.fragancias);
      }
    })
  }
}
