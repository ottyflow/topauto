import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Articulo } from '../../interfaces/articulo.interface';

@Injectable()
export class ArticulosProvider {

  articulos:any [] = [];
  unarticulo:any;
  codigoarticulo:any;

  constructor(public http: Http) {
    console.log('Hello ArticulosProvider Provider');
  }

  cargar_articulos(){
    this.articulos=[];
    let url = URL_SERVICIOS + "/productos";

    return this.http.get( url )
                    .map( resp=> resp.json() )
                      .subscribe( data=>{

                        console.log(data.productos);

                        if(data.error){

                        }else{
                          this.articulos.push( ...data.productos);
                          console.log(this.articulos);
                        }
                      })
  }

  cargar_articulo(codigoarticulo:any){
    this.unarticulo=[];
    let articulo = new Articulo();
    let url = URL_SERVICIOS + "/productos/articulo/" + codigoarticulo ;

    return this.http.get( url )
                    .map( resp=> resp.json() )
                      .subscribe( data=>{

                        console.log(data.articulo);

                        if(data.error){

                        }else{
                          this.unarticulo.push( ...data.articulo);
                          articulo = data.articulo;
                          console.log(articulo);
                        }
                      })
  }

}
