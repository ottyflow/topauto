import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events, ViewController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

@Component({
  selector: 'page-popupcliente',
  templateUrl: 'popupcliente.html',
})
export class PopupclientePage {
  clientes: any[] = [];
  count: number = 0;

  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams, private modal: ModalController, private _cs: ClientesProvider, public events: Events) {
  }

  cargaCliente(item) {
    this.view.dismiss(item);
  }

  generateClientes() {
    if (this.clientes == undefined) {
      this.clientes = this._cs.clientes;
    }
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.count = this._cs.clientesFinalPopUp.length;
      for (let i = 0; i < 100; i++) {
        this._cs.clientesFinalPopUp.push(this._cs.clientes[this.count]); // this will start pushing next 5 items
        this.count++
      }
      infiniteScroll.complete();
    }, 500);
  }

  getClientes(ev: any) {
    this.generateClientes();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this._cs.clientesFinalPopUp = this._cs.clientes.filter((item) => {
        if (item.razon_social != null && item.nombre_fantasia != null) {
          return (item.razon_social.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.nombre_fantasia.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
        }
      })
    } else {
      this._cs.cargar_clientes();
    }
  }

  closeModal() {
    this.view.dismiss();
  }

  ionViewWillEnter() {
    this._cs.cargar_clientes();
  }
}
