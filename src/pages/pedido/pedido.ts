import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { BuscadorxcodigoPage } from '../buscadorxcodigo/buscadorxcodigo';
import { Pedido } from '../../interfaces/pedido.interface';
import { UsuariosProvider}  from "../../providers/usuarios/usuarios";
import { PopupclientePage } from '../popupcliente/popupcliente';
import { Cliente } from '../../interfaces/clientes.interface';


/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  cliente = new Cliente();
  articulos:any [] = [];
  queryText : string;
  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  subtotal: number;
  total: number;
  descuento:number;
  descuentoCalculado: number;
  numero:number = 1;
  medpago:any;
  condpago:any;
  notas: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _ps:PedidosProvider, public _us:UsuariosProvider) {
    this.articulos = this._ps.articulos;
    console.log(this.articulos);
    for(let articulo of this.articulos){
      this.subtotal = this.subtotal + articulo.precio;
      console.log(this.subtotal);
    }

  }

  openModal(codigoarticulo:any){
    const myModal = this.modal.create(BuscadorxcodigoPage, {codigoarticulo}, { cssClass: 'buscaCodigo' });
    myModal.present();
  }

  openModalCliente(){
    let myModalCliente = this.modal.create(PopupclientePage);
    myModalCliente.onDidDismiss(data =>{
      console.log(data);
      if(data!=undefined){
        this.cliente = data;
      }
    })
    myModalCliente.present();
  }

  calculaSubtotal(){
    this.subtotal = 0;
    for(let articulo  of this.articulos){
      console.log(articulo.getPrecio());
      this.subtotal = this.subtotal + parseInt(articulo.getPrecio());
      console.log(this.subtotal);
    }
    this.calculaDescuento(this.subtotal);
    this.calculaTotal(this.subtotal);
  }

  calculaDescuento(subtotal:number){
    if(this.descuento !=null && this.descuento!= 0){
      this.descuentoCalculado = 0;
      console.log(this.descuentoCalculado);
      this.descuentoCalculado = (this.subtotal * this.descuento)/100;
    }else{
      this.descuentoCalculado = 0;
    }
  }

  calculaTotal(subtotal:number){
    this.total = 0;
    console.log(subtotal);
    console.log(this.total);
    console.log(this.descuento);
    this.total= subtotal - this.descuentoCalculado;
    console.log(this.total);
  }

  generateItems(){
    this.articulos;
  }

  // getItems(ev: any){
  //   this.generateItems();
  //   let serVal = ev.target.value;
  //   if(serVal&& serVal.trim() !='') {
  //     this.articulos = this.articulos.filter((item) => {
  //       return (item.descripcion.toLowerCase().indexOf(serVal.toLowerCase()) > -1 );
  //     })
  //   }
  // }
  showHide1() {
   this.hideMe1 = !this.hideMe1;
  }
  showHide2() {
  this.hideMe2 = !this.hideMe2;
  }
  showHide3() {
   this.hideMe3 = !this.hideMe3;
  }

  borrar(codigo:any){
    var contador:number = 0;
    if(codigo!=undefined){
      console.log(codigo);
      for(let articulo of this.articulos){
        if(articulo.codigo == codigo){
          this.articulos.splice(contador, 1);
          console.log(this.articulos);
        }
        contador++;
      }
          this.generateItems();
    }
  }

  cancelarPedido(){
    this.articulos.length = 0;
    this.medpago=null;
    this.condpago=null;
    this.notas="";
    this.generateItems();
  }

  grabarPedido(){
    let pedido = new Pedido();
    pedido.id_transaccion =  Math.floor(Math.random() * 9999) + 1;
    pedido.numero = this.numero;
    pedido.id_cliente = this.cliente.codigo;
    pedido.id_vendedor = parseInt(this._us.id_usuario);
    pedido.total = this.total;
    pedido.id_mpago = this.medpago;
    pedido.id_condpago = this.condpago;
    pedido.controlado = 0;
    pedido.descuento = this.descuento;
    pedido.notas = this.notas;
    pedido.created_at = new Date() ;
    pedido.updated_at = new Date() ;
    this._ps.grabar_pedido(pedido, this.articulos);
    console.log(pedido);
    this.cancelarPedido();
    this._ps.ultimo_numero(this._us.id_usuario)
  }

  // grabar_detalle(){
  //   for(let articulo of this.articulos){
  //     let pedidoDetalle = new PedidoDetalle();
  //     pedidoDetalle.transaccion = 23452;
  //     pedidoDetalle.articulo = articulo.codigoarticulo;
  //     pedidoDetalle.cantidad = 2;
  //     pedidoDetalle.precio = articulo.precio;
  //     pedidoDetalle.created_at = new Date();
  //     pedidoDetalle.updated_at = new Date();
  //     this._ps.grabarDetalle(articulo);
  //   }
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

  ionViewWillEnter() {
    this._ps.ultimo_numero(this._us.id_usuario);
    this.numero = this._ps.numero;
    console.log(this.numero);
    if(this.numero == undefined){
      this.numero = 1;
    }else{
      this.numero++;
    }
    console.log(this.numero);
    this.calculaSubtotal();
  }

}
