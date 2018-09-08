import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

@IonicPage()
@Component({
  selector: 'page-formcliente',
  templateUrl: 'formcliente.html',
})
export class FormclientePage {

  accion:any = 0;
  codigo:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private _cs:ClientesProvider) {
    this.accion = this.navParams.get("accion");
    this.codigo = this.navParams.get("codigo");
    this.traercliente(this.codigo);
  }

  closeModal(){
    this.view.dismiss();
  }

  modificar(accion:any){
    this.accion=accion;
  }

  traercliente(codigo:string){
    this._cs.traer_cliente(this.codigo)

    }
}
