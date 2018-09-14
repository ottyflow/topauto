import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ClientesProvider {

  clientes:any [] = [];
  cliente:any [] = [];
  codigocliente:string="";
  razonsocial:string="";
  nombrefantasia:string="";
  constructor(public http: Http) {

  }

  cargar_clientes(){
    let url = URL_SERVICIOS + "/clientes";

    return this.http.get( url )
                    .map( resp=> resp.json() )
                      .subscribe( data=>{

                        console.log(data);

                        if(data.error){

                        }else{
                          this.clientes.push( ...data.clientes);
                          console.log(this.clientes);
                        }
                      })
  }


  traer_cliente(codigocliente:string){
    let url = URL_SERVICIOS + "/clientes/cliente/" + codigocliente;
    return this.http.get( url )
                    .map( resp=> resp.json() )
                      .subscribe( data=>{

                        console.log(data);

                        if(data.error){

                        }else{
                          this.clientes.push( ...data.cliente);

                          // this.razonsocial= data.razonsocial;
                          // this.nombrefantasia = data.nombrefantasia;
                          // console.log(this.razonsocial);
                          this.cliente= data.cliente;
                           console.log(this.cliente);

                        }
                      })
  }

}
