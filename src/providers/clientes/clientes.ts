import { Http } from '@angular/http';
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
                          this.cliente= data.cliente;
                           console.log(this.cliente);

                        }
                      })
  }

  grabar_cliente(cliente = []){
    this.cliente = cliente;
    let url = URL_SERVICIOS + "/clientes/insertar/";
    let data = new URLSearchParams();
    return this.http.post( url, this.cliente)
                    .map( resp=>{
                      let data_resp = resp.json();
                      console.log(data_resp);

                      if( data_resp.error ){
                        this.alertCtrl.create({
                          title:"Error",
                          subTitle: data_resp.mensaje,
                          buttons:["OK"]
                        }).present();
                      }else{
                        let toast = this.toastCtrl.create({
                        message: 'User was added successfully',
                        duration: 3000,
                        position: 'bottom'
                        });
                      }
                    })
  }

}
