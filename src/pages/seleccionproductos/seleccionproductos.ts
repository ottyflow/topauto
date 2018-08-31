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


  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    this.view.dismiss();
  }

  increment1 () {
    this.currentNumber1++;
  }

  decrement1 () {
    this.currentNumber1--;
  }

  increment2 () {
    this.currentNumber2++;
  }

  decrement2 () {
    this.currentNumber2--;
  }
  increment3 () {
    this.currentNumber3++;
  }

  decrement3 () {
    this.currentNumber3--;
  }
  increment4 () {
    this.currentNumber4++;
  }

  decrement4 () {
    this.currentNumber4--;
  }
  increment5 () {
    this.currentNumber5++;
  }

  decrement5 () {
    this.currentNumber5--;
  }
  increment6 () {
    this.currentNumber6++;
  }

  decrement6 () {
    this.currentNumber6--;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionproductosPage');
  }

}
