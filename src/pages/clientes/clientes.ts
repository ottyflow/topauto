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
  count:number = 0;

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

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.count = this._cs.clientesFinal.length;
      for (let i = 0; i < 100; i++) {
        this._cs.clientesFinal.push(this._cs.clientes[this.count]); // this will start pushing next 5 items
        this.count++
      }
      infiniteScroll.complete();
    }, 500);
  }

  ionViewWillEnter() {
      this._cs.cargar_clientes();
  }
}
