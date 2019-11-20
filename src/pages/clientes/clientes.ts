import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { FormclientePage } from '../formcliente/formcliente';

@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  clientes: any[] = [];
  accion: any;
  codigo: string = "";
  count: number = 0;
  queryText:any;
  public isSearchBarOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _cs: ClientesProvider, public events: Events) {
  }

  openModal(accion: any, codigo: string) {
    const myModal = this.modal.create(FormclientePage, { accion, codigo })
    myModal.present();
  }

  openModalvacio(accion: any) {
    const myModal = this.modal.create(FormclientePage, { accion })
    myModal.present();
    myModal.onDidDismiss(() => { this._cs.cargar_clientes(); })
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

  getClientes(ev: any) {
    this.generateClientes();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this._cs.clientesFinal = this._cs.clientes.filter((item) => {
        if (item.razon_social != null && item.nombre_fantasia != null) {
          return (item.razon_social.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.nombre_fantasia.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
        }
      })
      ev.target.blur();
    } else {
      this._cs.cargar_clientes();
    }
  }

  onCancel(ev: any){
    this.queryText= "";
    this.isSearchBarOpened = false;
    this._cs.cargar_clientes();
  }

  generateClientes() {
    if (this.clientes == undefined) {
      this.clientes = this._cs.clientes;
    }
  }

  ionViewWillEnter() {
    this._cs.cargar_clientes();
  }
}
