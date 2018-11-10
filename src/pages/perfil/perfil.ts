import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuariosProvider}  from "../../providers/usuarios/usuarios";
import { PedidosProvider } from '../../providers/pedidos/pedidos';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  pedidos = [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _us:UsuariosProvider, public _ps: PedidosProvider) {
    this._ps.get_pedidos(18);
    console.log(this._ps.pedidos)
  }

  logOuT(){
    this._us.cerrar_sesion();
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }

}
