import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  articulocopia:any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.articulocopia = this.navParams.get("datoarticulo");
    this.totalPrecio=this.articulocopia.precio;
    this.precio = this.articulocopia.precio;
  }

  closeModal(procesa:any){
    if(procesa==0){
      this.cancelar();
    }else{

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
      this.articulocopia.precio = this.totalPrecio;
    }
  }

  cancelar(){
    this.articulocopia.precio= this.precio;
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
