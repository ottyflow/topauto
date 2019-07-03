import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController  } from "ionic-angular";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { URL_SERVICIOS } from '../../config/url.servicios';
import { PedidoDetalle } from '../../interfaces/pedidoDetalle.interface';

/*
  Generated class for the PedidosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PedidosProvider {
  pedidos: any[];
  pedido:any [] = [];
  articulos:Array<any> = new Array();
  subtotal: number = 0;
  noesta: number=0;
  numero:number;
  posicion: number = 0;

  constructor(public http: Http, public alertCtrl: AlertController, private toastCtrl: ToastController) {
    console.log('Hello PedidosProvider Provider');
  }

  agregar_pedido(articulo_parametro:any){
    console.log(articulo_parametro);
    for(let articulo of this.articulos){
      if(articulo.codigo == articulo_parametro.codigo){
        console.log(articulo_parametro);
        console.log(articulo.codigo);
        this.alertCtrl.create({
            title: "Articulo cargado",
            subTitle: "Este articulo ya se encuentra cargado",
            buttons: ["Aceptar"]
        }).present();
          return;
      }
    }
    this.articulos.push(articulo_parametro);
    console.log(articulo_parametro);
    console.log(this.articulos);
    for(let articulo of this.articulos){
      if(articulo.codigo != articulo_parametro.codigo){
        this.noesta++;
      }
    }
    if(this.noesta == this.articulos.length){
      this.subtotal = this.subtotal + parseInt(articulo_parametro.precio);
    }
    console.log(this.subtotal);
  }

  get_pedidos(usuarioId){
    this.pedidos = [];
    let url = URL_SERVICIOS + "/pedidos/" + usuarioId;
    return this.http.get( url )
                    .map( resp=> resp.json() )
                      .subscribe( data=>{

                        console.log(data.pedidosCab);

                        if(data.error){

                        }else{
                          this.pedidos.push( ...data.pedidosCab);
                          console.log(this.pedidos);
                        }
                      })
  }

  grabar_pedido(pedido, articulos){
    for( let articulo of articulos){
      let detalle = new PedidoDetalle();
      detalle.transaccion = pedido.id_transaccion;
      detalle.articulo = articulo.codigo;
      detalle.cantidad = articulo.cantidad;
      detalle.precio = articulo.precio;
      detalle.created_at = new Date();
      detalle.updated_at = new Date();
      this.grabarDetalle(detalle);
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = URL_SERVICIOS + "/pedidos/insertCab";
    let data = new URLSearchParams();
    data.append("id_transaccion", pedido.id_transaccion);
    data.append("numero", pedido.numero);
    data.append("id_cliente", pedido.id_cliente);
    data.append("id_vendedor", pedido.id_vendedor);
    data.append("total", pedido.total);
    data.append("id_mpago", pedido.id_mpago);
    data.append("id_condpago", pedido.id_condpago);
    data.append("controlado", pedido.controlado);
    data.append("descuento", pedido.descuento);
    data.append("notas", pedido.notas);
    data.append("created_at", pedido.created_at);
    data.append("updated_at", pedido.updated_at);
    console.log(JSON.stringify(pedido));
    return this.http.post( url, JSON.stringify(pedido), {headers: headers})
                    .map( resp=>resp.json()).subscribe(data=>{
                      if(!data.error){
                        let toast = this.toastCtrl.create({
                          message: 'Pedigo grabado correctamente',
                          duration: 3000,
                          position: 'bottom',
                          cssClass: "toastPedido"
                        });

                        toast.onDidDismiss(() => {
                          console.log('Dismissed toast');
                        });

                        toast.present();
                      }else{
                          console.log(data);
                          let toast = this.toastCtrl.create({
                            message: 'Error al grabar pedido',
                            duration: 3000,
                            position: 'bottom',
                            cssClass: "toastPedido"
                          });

                          toast.onDidDismiss(() => {
                            console.log('Dismissed toast');
                          });

                          toast.present();
                      }
    }
                  );
  }

  grabarDetalle(detalle){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url = URL_SERVICIOS + "/pedidos/insertDet";
      let data = new URLSearchParams();
      data.append("transaccion", detalle.id_transaccion);
      data.append("articulo", detalle.codigoarticulo);
      data.append("cantidad", detalle.cantidad);
      data.append("precio", detalle.precio);
      data.append("created_at", detalle.created_at);
      data.append("updated_at", detalle.updated_at);
      console.log(JSON.stringify(data));
      return this.http.post( url, JSON.stringify(detalle), {headers: headers})
                      .map( resp=>resp.json()).subscribe(data=>console.log(data));
  }

  ultimo_numero(usuarioId){
    let url = URL_SERVICIOS + "/pedidos/ultimoNumero/" + usuarioId;
    return this.http.get( url )
                    .map( resp=> resp.json() )
                      .subscribe( data=>{
                        console.log(data);
                        // console.log(data[0].numero);
                        if(data.length > 0){
                            this.numero = (data[0].numero);
                        }
                          console.log(this.numero);
                      })
  }
}
