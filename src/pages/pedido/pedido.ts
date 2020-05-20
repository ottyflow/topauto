import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController, ActionSheetController  } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { ToastController } from "ionic-angular";
import { Pedido } from '../../interfaces/pedido.interface';
import { UsuariosProvider } from "../../providers/usuarios/usuarios";
import { PopupclientePage } from '../popupcliente/popupcliente';
import { Cliente } from '../../interfaces/clientes.interface';

@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  cliente = new Cliente();
  articulos: any[] = [];
  queryText: string;
  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  subtotal: number;
  total: number;
  descuento: number;
  descuentoCalculado: number = 0;
  numero: number = 1;
  medpago: any;
  condpago: any;
  notas: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _ps: PedidosProvider, public _us: UsuariosProvider, private toastCtrl: ToastController, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController) {
    this.articulos = this._ps.articulos;
    for (let articulo of this.articulos) {
      this.subtotal = this.subtotal + articulo.precio;
    }
  }

  openModalCliente() {
    let myModalCliente = this.modal.create(PopupclientePage);
    myModalCliente.onDidDismiss(data => {
      if (data != undefined) {
        this.cliente = data;
      }
    })
    myModalCliente.present();
  }

  calculaSubtotal() {
    this.subtotal = 0;
    for (let articulo of this.articulos) {
      this.subtotal = this.subtotal + parseInt(articulo.getPrecio());
    }
    this.calculaDescuento(this.subtotal);
    this.calculaTotal(this.subtotal);
  }

  calculaDescuento(subtotal: number) {
    if (this.descuento != null && this.descuento != 0) {
      this.descuentoCalculado = 0;
      this.descuentoCalculado = (this.subtotal * this.descuento) / 100;
    } else {
      this.descuentoCalculado = 0;
    }
  }

  calculaTotal(subtotal: number) {
    this.total = 0;
    this.total = subtotal - this.descuentoCalculado;
  }

  generateItems() {
    this.articulos;
  }

  showHide1() {
    this.hideMe1 = !this.hideMe1;
  }
  showHide2() {
    this.hideMe2 = !this.hideMe2;
  }
  showHide3() {
    this.hideMe3 = !this.hideMe3;
  }

  async popupDescuento(articulo){
    const alert = await this.alertCtrl.create({
          title: 'Descuento',
          inputs: [{
              name: 'descuentolinea',
              type: 'number',
              min: 0,
              max: 100
          }],
          buttons: [{
            text: 'Aceptar',
            handler: (alertData) => {
              this.descuentoLinea(articulo, alertData.descuentolinea);
            }
          },{
            text: 'Cancelar',
            role: 'cancel',
          }]
        });
        await alert.present();

  }

  descuentoLinea(articulo, descuento: number) {
      var descuentoCalc = (articulo.precio * descuento) / 100 ;
      articulo.precio = articulo.precio -descuentoCalc;
      this.calculaSubtotal();
  }

  borrar(codigo: any) {
    var contador: number = 0;
    if (codigo != undefined) {
      for (let articulo of this.articulos) {
        if (articulo.codigo == codigo) {
          this.articulos.splice(contador, 1);
        }
        contador++;
      }
      this.generateItems();
      this.calculaSubtotal();
    }
  }

  cancelarPedido() {
    if(this.articulos.length > 0){
      this.alertCtrl.create({
        subTitle: "¿Desea cancelar el pedido? Se eliminaran todos los items",
        buttons: [{
          text: 'Si',
          handler: () => {
            this.borrarPedido();
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
        }]
      }).present();
    }
  }

  borrarPedido(){
    this.articulos.length = 0;
    this.medpago = null;
    this.condpago = null;
    this.notas = "";
    this.cliente = new Cliente();
    this.descuento = 0;
    this.descuentoCalculado = 0;
    this.subtotal = 0;
    this.total = 0;
    this.generateItems();
  }

  grabarPedido() {
    let pedido = new Pedido();
    pedido.id_transaccion = Math.floor(Math.random() * 9999) + 1;
    pedido.numero = this.numero;
    pedido.id_cliente = this.cliente.codigo;
    pedido.id_vendedor = parseInt(this._us.id_usuario);
    pedido.total = this.total;
    pedido.id_mpago = this.medpago;
    pedido.id_condpago = this.condpago;
    pedido.controlado = 0;
    pedido.descuento = this.descuento;
    pedido.notas = this.notas;
    pedido.created_at = new Date();
    pedido.updated_at = new Date();
    if (this.articulos.length < 1 || this.articulos.length == null || this.articulos.length == undefined) {
      let toast = this.toastCtrl.create({
        message: 'Debe ingresar por lo menos un articulo',
        duration: 3000,
        position: 'bottom',
        cssClass: "toastPedido"
      });
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
      toast.present();
    } else {
      if (pedido.id_cliente == undefined) {
        let toast = this.toastCtrl.create({
          message: 'Debe ingresar un cliente',
          duration: 3000,
          position: 'bottom',
          cssClass: "toastPedido"
        });
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
        toast.present();
      } else {
        if (this.medpago == undefined) {
          let toast = this.toastCtrl.create({
            message: 'Debe indicar condicion de facturacion',
            duration: 3000,
            position: 'bottom',
            cssClass: "toastPedido"
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
          toast.present();
        } else {
          if (this.condpago == undefined) {
            let toast = this.toastCtrl.create({
              message: 'Debe indicar una condicion de pago',
              duration: 3000,
              position: 'bottom',
              cssClass: "toastPedido"
            });
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
            toast.present();
          } else {
            this._ps.grabar_pedido(pedido, this.articulos);
            this.borrarPedido();
            this._ps.ultimo_numero(this._us.id_usuario);
          }
        }
      }
    }
  }

  ionViewWillEnter() {
    this._ps.ultimo_numero(this._us.id_usuario);
    this.numero = this._ps.numero;
    if (this.numero == undefined) {
      this.numero = 1;
    } else {
      this.numero++;
    }
    this.calculaSubtotal();
  }

}
