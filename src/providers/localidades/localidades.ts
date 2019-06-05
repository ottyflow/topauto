import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Localidad } from '../../interfaces/localidad.interface';

@Injectable()
export class LocalidadesProvider {

  localidades: any [] = [];
  localidad: any;

  constructor(public http: Http) {
    console.log('Hello LocalidadesProvider Provider');
  }

  cargar_localidades(){
    this.localidades= new Array();
    let url = URL_SERVICIOS + "/localidades";

    return this.http.get( url )
                    .map( resp=> resp.json() )
                      .subscribe( data=>{

                        console.log(data.localidades);

                        if(data.error){

                        }else{
                          this.localidades.push( ...data.localidades);
                          console.log(this.localidades);
                        }
                      })
  }

}
