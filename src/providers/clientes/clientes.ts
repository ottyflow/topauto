import { Http , URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { AlertController , Platform } from "ionic-angular";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ClientesProvider {

  clientes:any [] = [];

  constructor(public http: Http, private platform: Platform, private storage:Storage) {
    this.cargar_clientes();
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

  private guardar_storage(){
    if(this.platform.is("cordova")){
      this.storage.set('token', this.token);
      this.storage.set('id_usuario', this.id_usuario);
    }else{
      if (this.token){
      localStorage.setItem("token", this.token);
      localStorage.setItem("id_usuario", this.id_usuario);
      }else{
        localStorage.removeItem("token");
        localStorage.removeItem("id_usuario");
      }
    }
  }

}
