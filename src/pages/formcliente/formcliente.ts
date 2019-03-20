import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ClientesProvider } from '../../providers/clientes/clientes';
import { Cliente } from '../../interfaces/clientes.interface';

@Component({
  selector: 'page-formcliente',
  templateUrl: 'formcliente.html',
})
export class FormclientePage {

  accion:any = 0;
  codigo:any;
  razon_social: string;
  nombre_fantasia: string;
  id_provincia: number;
  id_iva: number;
  id_localidad: number;
  email: string;
  web: string;
  cuenta: string;
  cuit: string;
  telefono: string;
  telefono2: string;
  direccion: string;
  codigo_postal: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private _cs:ClientesProvider) {
    this.accion = this.navParams.get("accion");
    this.codigo = this.navParams.get("codigo");
    if(this.codigo != null){
      this.traercliente(this.codigo);
    }
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

  grabar_cliente(){
    let cliente = new Cliente();
    cliente.codigo='';
    cliente.razon_social=this.razon_social;
    cliente.nombre_fantasia=this.nombre_fantasia;
    cliente.id_provincia=this.id_provincia;
    cliente.id_iva=this.id_iva;
    cliente.id_localidad=this.id_localidad;
    cliente.email=this.email;
    cliente.web=this.web;
    cliente.cuenta=this.cuenta;
    cliente.cuit=this.cuit;
    cliente.telefono=this.telefono;
    cliente.telefono2=this.telefono2;
    cliente.direccion=this.direccion;
    cliente.codigo_postal=this.codigo_postal;
    console.log(cliente);
    this._cs.grabar_cliente(cliente);
    this.closeModal();
  }
}
