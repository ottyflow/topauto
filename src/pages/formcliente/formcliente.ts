import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';

@IonicPage()
@Component({
  selector: 'page-formcliente',
  templateUrl: 'formcliente.html',
})
export class FormclientePage {

  cliente = {
    codigo:'',
    codigo_postal:'',
    created_at:'',
    cuenta:'',
    cuit:'',
    direccion:'',
    email:'',
    id_iva:'',
    id_localidad:'',
    id_provincia:'',
    nombre_fantasia:'',
    razon_social:'',
    telefono:'',
    telefono2:'',
    updated_at:'',
    web:''
  };
  accion:any = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private _cs:ClientesProvider) {
    this.accion = this.navParams.get("accion");
  }

  logForm(){
    console.log(this.cliente);
  }
  closeModal(){
    this.view.dismiss();
  }

  modificar(accion:any){
    this.accion=accion;
  }
}
