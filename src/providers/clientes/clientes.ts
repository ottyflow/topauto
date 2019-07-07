import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/url.servicios';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ClientesProvider {
  [x: string]: any;
  clientes = [];
  clientesFinal = [];
  clientesFinalPopUp = [];
  cliente: any[] = [];
  codigocliente: string = "";
  razonsocial: string = "";
  nombrefantasia: string = "";
  count: number = 0;

  constructor(public http: Http, public toastCtrl: ToastController) {
  }

  cargar_clientes() {
    this.count = 0;
    this.clientes = new Array();
    let url = URL_SERVICIOS + "/clientes";
    return this.http.get(url).map(resp => resp.json()).subscribe(data => {
      console.log(data);
      if (data.error) {
      } else {
        for (let item of data.clientes) {
          this.clientes.push(item);
        }
        this.clientesFinal = new Array();
        for (let i = 0; i < 100; i++) {
          this.clientesFinal.push(this.clientes[this.count]);
          this.count++;
        }
        this.count = 0;
        this.clientesFinalPopUp = new Array();
        for (let i = 0; i < 100; i++) {
          this.clientesFinalPopUp.push(this.clientes[this.count]);
          this.count++;
        }
      }
    })
  }

  traer_cliente(codigocliente: string) {
    let url = URL_SERVICIOS + "/clientes/cliente/" + codigocliente;
    return this.http.get(url).map(resp => resp.json()).subscribe(data => {
      if (data.error) {
      } else {
        this.clientes.push(...data.cliente);
        this.cliente = data.cliente;
      }
    })
  }

  grabar_cliente(cliente: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = URL_SERVICIOS + "/clientes/insertar/";
    return this.http.post(url, JSON.stringify(cliente), { headers: headers })
      .map(resp => resp.json()).subscribe(data => console.log(data)
      );
  }

}
