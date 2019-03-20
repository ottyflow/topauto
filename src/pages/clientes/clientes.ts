import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { FormclientePage } from '../formcliente/formcliente';

@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes:any = [];
  accion:any;
  codigo:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _cs:ClientesProvider , public events: Events) {
  }

  openModal( accion:any,codigo:string ){
    const myModal =  this.modal.create(FormclientePage, { accion,codigo })
    console.log(accion,codigo);
    myModal.present();
  }

  openModalvacio( accion:any){
    const myModal =  this.modal.create(FormclientePage, { accion })
    console.log(accion);
    myModal.present();
    myModal.onDidDismiss(()=>{this._cs.cargar_clientes();})
  }

  ionViewWillEnter() {
      this._cs.cargar_clientes();
  }
}
