import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProveedorProvider } from '../../providers/proveedor/proveedor';
import {Http, Headers} from "@angular/http";
import { Cliente } from '../../interfaces/clientes.interface';
import { CLIENTES } from '../../data/data.cliente';
import { FormclientePage} from '../formcliente/formcliente';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes:any = [];
  accion:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:ProveedorProvider, private modal: ModalController) {

        this.generateClientes();

  }

  generateClientes(){
  this.clientes = CLIENTES;
  }
  getItems(ev: any){
    this.generateClientes();
    let serVal = ev.target.value;
    if(serVal&& serVal.trim() !='') {
      this.clientes = this.clientes.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(serVal.toLowerCase()) > -1 );
      })
    }
  }

  openModal( accion:any ){
    const myModal =  this.modal.create('FormclientePage', { accion })
    console.log(accion);
    myModal.present();
  }

}
