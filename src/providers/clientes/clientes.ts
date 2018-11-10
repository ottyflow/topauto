import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ClientesProvider {
  [x: string]: any;

  clientes:any [] = [];
  cliente:any [] = [];
  codigocliente:string="";
  razonsocial:string="";
  nombrefantasia:string="";
  constructor(public http: Http, public toastCtrl: ToastController) {

  }

  cargar_clientes(){
    this.clientes = [];
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
                          this.cliente= data.cliente;
                           console.log(this.cliente);

                        }
                      })
  }

  grabar_cliente(cliente:any){
    console.log(cliente);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = URL_SERVICIOS + "/clientes/insertar/";
    let data = new URLSearchParams();
    data.append("codigo", cliente.codigo);
    data.append("razon_social", cliente.razon_social);
    data.append("nombre_fantasia", cliente.nombre_fantasia);
    data.append("id_provincia", cliente.id_provincia);
    data.append("id_iva", cliente.id_iva);
    data.append("id_localidad", cliente.id_localidad);
    data.append("email", cliente.email);
    data.append("web", cliente.web);
    data.append("cuenta", cliente.cuenta);
    data.append("cuit", cliente.cuit);
    data.append("telefono", cliente.telefono);
    data.append("telefono2", cliente.telefono2);
    data.append("direccion", cliente.direccion);
    data.append("codigo_postal", cliente.codigo_postal);
    console.log(JSON.stringify(cliente));
    return this.http.post( url, JSON.stringify(cliente), {headers: headers})
                    .map( resp=>resp.json()).subscribe(data=>console.log(data)
                    //   {
                    //   let data_resp = resp.json();
                    //   console.log(data_resp);
                    //   if( data_resp.error ){
                    //     this.alertCtrl.create({
                    //       title:"Error",
                    //       subTitle: data_resp.mensaje,
                    //       buttons:["OK"]
                    //     }).present();
                    //   }else{
                    //     let toast = this.toastCtrl.create({
                    //     message: 'User was added successfully',
                    //     duration: 3000,
                    //     position: 'bottom'
                    //     });
                    //   }
                    // }
                  );
  }

}
