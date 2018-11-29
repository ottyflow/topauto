import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events, ViewController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

@Component({
  selector: 'page-popupcliente',
  templateUrl: 'popupcliente.html',
})
export class PopupclientePage {

  clientes:any [] = [];

  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams, private modal: ModalController, private _cs:ClientesProvider , public events: Events) {
  }

  cargaCliente(item){
    console.log(item);
    this.view.dismiss(item);
  }

  generateClientes(){
    if(this.clientes==undefined){
      this.clientes = this._cs.clientes;
    }
  }

  getClientes(ev: any){
    this.generateClientes();
    let serVal = ev.target.value;
    if(serVal&& serVal.trim() !='') {
      this._cs.clientes = this._cs.clientes.filter((item) => {
        return (item.razon_social.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.nombre_fantasia.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.cuenta.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.cuit.toLowerCase().indexOf(serVal.toLowerCase()) > -1 );
      })
    }else{
      this._cs.cargar_clientes();
    }

  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupclientePage');
  }

  ionViewWillEnter() {
      this._cs.cargar_clientes();
  }

}
