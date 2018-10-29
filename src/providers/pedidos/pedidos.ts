import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController , Platform } from "ionic-angular";

/*
  Generated class for the PedidosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosProvider {

  articulos:any [] = [];

  constructor(public http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello PedidosProvider Provider');
  }

  agregar_pedido(articulo_parametro:any){
    for(let articulo of this.articulos){
      if(articulo.codigo == articulo_parametro.codigo){
        this.alertCtrl.create({
            title: "Articulo cargado",
            subTitle: "Este articulo ya se encuentra cargado",
            buttons: ["Aceptar"]
        }).present();
          return;
      }
    }
    this.articulos.push( articulo_parametro );
    console.log(articulo_parametro);
    console.log(this.articulos);
  }

}
