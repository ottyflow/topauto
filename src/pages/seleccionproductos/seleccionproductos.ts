import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PedidoPage } from '../pedido/pedido';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { ArticulosProvider } from '../../providers/articulos/articulos';

/**
 * Generated class for the SeleccionproductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccionproductos',
  templateUrl: 'seleccionproductos.html',
})
export class SeleccionproductosPage {

  currentNumber1 = 0;
  currentNumber2 = 0;
  currentNumber3 = 0;
  currentNumber4 = 0;
  currentNumber5 = 0;
  currentNumber6 = 0;
  totalCantidades= 0;
  totalPrecio = 0;
  precio = 0;

  codigoArticulo:any= 0;
  solocodigo:any;
  articulo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private _ps:PedidosProvider, private _as:ArticulosProvider) {
      var articulocopia:any = this.navParams.get("datoarticulo");
      console.log(articulocopia);
      if(articulocopia != undefined){
        this.totalPrecio=articulocopia.precio;
        this.precio = articulocopia.precio;
        this.articulo = articulocopia;
        console.log(this.articulo);
      }else{
        articulocopia= _as.unarticulo;
        console.log(articulocopia);
        this.totalPrecio=articulocopia.precio;
        this.precio = articulocopia.precio;
        this.articulo = articulocopia;
      }
  }

  closeModal(procesa:any,articulo){
    if(procesa==0){
      this.cancelar();
    }else{
      this._ps.agregar_pedido(articulo);
      this.cancelar();
    }
    this.view.dismiss();
  }

  increment1 () {
    this.currentNumber1++;
    this.calculaTotal();
  }

  decrement1 () {
    this.currentNumber1--;
    this.calculaTotal();
  }

  increment2 () {
    this.currentNumber2++;
    this.calculaTotal();
  }

  decrement2 () {
    this.currentNumber2--;
    this.calculaTotal();
  }
  increment3 () {
    this.currentNumber3++;
    this.calculaTotal();
  }

  decrement3 () {
    this.currentNumber3--;
    this.calculaTotal();
  }
  increment4 () {
    this.currentNumber4++;
    this.calculaTotal();
  }

  decrement4 () {
    this.currentNumber4--;
    this.calculaTotal();
  }
  increment5 () {
    this.currentNumber5++;
    this.calculaTotal();
  }

  decrement5 () {
    this.currentNumber5--;
    this.calculaTotal();
  }
  increment6 () {
    this.currentNumber6++;
    this.calculaTotal();
  }

  decrement6 () {
    this.currentNumber6--;
    this.calculaTotal();
  }

  calculaTotal(){
    this.totalCantidades = (this.currentNumber1+this.currentNumber2+this.currentNumber3+this.currentNumber4+this.currentNumber5+this.currentNumber6);
    if(this.totalCantidades>0){
      this.totalPrecio = this.precio * this.totalCantidades;
    }
    if(this.totalPrecio>0){
      this.articulo.precio = this.totalPrecio;
    }
  }

  cancelar(){
    this.articulo.precio= this.precio;
    this.currentNumber1 = 0;
    this.currentNumber2 = 0;
    this.currentNumber3 = 0;
    this.currentNumber4 = 0;
    this.currentNumber5 = 0;
    this.currentNumber6 = 0;
    this.totalCantidades= 0;
    this.totalPrecio = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionproductosPage');
  }

}
