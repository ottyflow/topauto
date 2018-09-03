import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

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
  app: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  logOut() : void
   {
     this.navCtrl.parent.parent.setRoot(LoginPage);
   }

}
