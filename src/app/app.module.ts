import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { CatalogoPage} from '../pages/catalogo/catalogo';
import { PedidoPage } from '../pages/pedido/pedido';
import { ClientesPage } from '../pages/clientes/clientes';
import { PerfilPage } from '../pages/perfil/perfil';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProveedorProvider } from '../providers/proveedor/proveedor';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    CatalogoPage,
    PedidoPage,
    ClientesPage,
    PerfilPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CatalogoPage,
    PedidoPage,
    ClientesPage,
    PerfilPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProveedorProvider
  ]
})
export class AppModule {}
