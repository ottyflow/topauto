import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Articulo } from '../../interfaces/articulo.interface';
import { CatalogoPage } from '../../pages/catalogo/catalogo';

@Injectable()
export class ArticulosProvider {

  articulos = [];
  articulosFinal = [];
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

  cargar_articulo(codigoarticulo: any) {
    this.articulos = new Array();
    let articulo = new Articulo();
    let url = URL_SERVICIOS + "/productos/articulo/" + codigoarticulo;
    return this.http.get(url).map(resp => resp.json()).subscribe(data => {
      if (data.error) {
      } else {
        this.unarticulo.push(...data.articulo);
        articulo = data.articulo;
      }
    })
  }
}
