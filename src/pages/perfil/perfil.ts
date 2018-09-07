import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UsuariosProvider}  from "../../providers/usuarios/usuarios";

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _us:UsuariosProvider) {
  }

  logOuT(){
    this._us.cerrar_sesion();
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }

}
