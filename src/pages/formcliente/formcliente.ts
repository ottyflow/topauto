import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FormclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formcliente',
  templateUrl: 'formcliente.html',
})
export class FormclientePage {

  accion:any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    console.log(this.accion);
    this.accion = this.navParams.get("accion");
    console.log(this.accion);
  }

  closeModal(){
    this.view.dismiss();
  }

  modificar(accion:any){
    this.accion=accion;
  }
}
