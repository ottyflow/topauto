import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Articulo } from '../../interfaces/articulo.interface';
import { ARTICULOS } from '../../data/data.articulos';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  articulos:any = [];
  queryText : string;
  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.generateItems();

  }

  generateItems(){
  this.articulos = ARTICULOS;
  }
  getItems(ev: any){
    this.generateItems();
    let serVal = ev.target.value;
    if(serVal&& serVal.trim() !='') {
      this.articulos = this.articulos.filter((item) => {
        return (item.descripcion.toLowerCase().indexOf(serVal.toLowerCase()) > -1 );
      })
    }
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
