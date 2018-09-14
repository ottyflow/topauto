import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:string ="";
  contrasena:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private _us:UsuariosProvider) {
  }

  ingresar(){
    this._us.ingresar(this.usuario, this.contrasena)
            .subscribe( ()=>{
              if(this._us.token != null){
                if(this._us.token.length > 1 ){
                  this.navCtrl.setRoot(TabsPage);
                }
              }
            })

  }
}
