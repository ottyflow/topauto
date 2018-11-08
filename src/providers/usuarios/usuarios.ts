import { Http , URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { AlertController , Platform } from "ionic-angular";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UsuariosProvider {

  token:string="";
  id_usuario:string="";
  nombre:string="";

  constructor(public http: Http, public alertCtrl: AlertController, private platform: Platform, private storage:Storage) {
    this.cargar_storage();
  }

  ingresar(usuario:string, contrasena:string){
    let url = URL_SERVICIOS + "/login";
    this.cerrar_sesion();
    let data = new URLSearchParams();
    data.append("usuario", usuario);
    data.append("contrasena", contrasena);

    return this.http.post( url, data )
                    .map( resp=>{
                      let data_resp = resp.json();
                      console.log(data_resp);

                      if( data_resp.error ){
                        this.alertCtrl.create({
                          title:"Error al inciar",
                          subTitle: data_resp.mensaje,
                          buttons:["OK"]
                        }).present();
                      }else{
                        this.token = data_resp.token;
                        this.id_usuario=data_resp.id_usuario;
                        this.nombre = data_resp.nombre;

                        this.guardar_storage();
                      }
                    })
  }

  cerrar_sesion(){
    this.token= null;
    this.id_usuario = null;
    this.guardar_storage();
  }

  private guardar_storage(){
    if(this.platform.is("cordova")){
      this.storage.set('token', this.token);
      this.storage.set('id_usuario', this.id_usuario);
      this.storage.set('nombre', this.nombre);
    }else{
      if (this.token){
      localStorage.setItem("token", this.token);
      localStorage.setItem("id_usuario", this.id_usuario);
      localStorage.setItem("nombre", this.nombre);
      }else{
        localStorage.removeItem("token");
        localStorage.removeItem("id_usuario");
        localStorage.removeItem("nombre");
      }
    }
  }

  private cargar_storage(){
    let promesa = new Promise((resolve, reject)=>{
      if (this.platform.is("cordova") ){
        this.storage.ready()
                      .then(()=>{
                        this.storage.get("token")
                                      .then(token=>{
                                        if(token){
                                          this.token = token;
                                        }
                                        resolve();
                                      })
                        this.storage.get("id_usuario")
                                      .then(id_usuario=>{
                                       if(id_usuario){
                                          this.id_usuario = id_usuario;
                                        }
                                        resolve();
                                      })
                      })
      }else{
        if(localStorage.getItem("token")){
          this.token = localStorage.getItem("token");
          this.id_usuario = localStorage.getItem("id_usuario");
        }
      }
    } )
    console.log(promesa);
  }

}
