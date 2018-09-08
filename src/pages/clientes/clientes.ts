import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes:any = [];
  accion:any;
  codigo:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _cs:ClientesProvider) {
  }

  openModal( accion:any,codigo:string ){
    const myModal =  this.modal.create('FormclientePage', { accion,codigo })
    console.log(accion,codigo);
    myModal.present();
  }

  }
