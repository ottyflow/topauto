import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { BuscadorxcodigoPage } from '../buscadorxcodigo/buscadorxcodigo';

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

  articulos:any [] = [];
  queryText : string;
  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _ps:PedidosProvider) {
    this.articulos = this._ps.articulos;
  }

  openModal(codigoarticulo:any){
    const myModal = this.modal.create(BuscadorxcodigoPage, {codigoarticulo}, { cssClass: 'buscaCodigo' });
    myModal.present();
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
    this.generateItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
