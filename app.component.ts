import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { ArticulosProvider } from '../providers/articulos/articulos';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _as:ArticulosProvider, private _us:UsuariosProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    console.log(this._us.token);
    this.rootPage = this._us.token ? TabsPage : LoginPage;

  }
}
