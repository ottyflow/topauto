import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from '../config/url.servicios.ts';

@Injectable()
export class UsuariosProvider {

  token:string="";
  id:string="";

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
  }

  ingresar(usuario:string, contrasena:string){

  }

}
