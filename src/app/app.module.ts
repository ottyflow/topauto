import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule}  from '@ionic/storage';
import { CatalogoPage} from '../pages/catalogo/catalogo';
import { PedidoPage } from '../pages/pedido/pedido';
import { ClientesPage } from '../pages/clientes/clientes';
import { PerfilPage } from '../pages/perfil/perfil';
import { BuscadorxcodigoPage } from '../pages/buscadorxcodigo/buscadorxcodigo';
import { FiltrosPage } from '../pages/filtros/filtros';
import { FormclientePage } from '../pages/formcliente/formcliente';
import { SeleccionproductosPage } from '../pages/seleccionproductos/seleccionproductos';
import { PopupclientePage } from '../pages/popupcliente/popupcliente';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { LoginPage } from '../pages/login/login';
import { UsuariosProvider } from '../providers/usuarios/usuarios';
import { ArticulosProvider } from '../providers/articulos/articulos';
import { PedidosProvider } from '../providers/pedidos/pedidos';
import { ClientesProvider } from '../providers/clientes/clientes';

@NgModule({
  declarations: [
    MyApp,
    PedidoPage,
    ClientesPage,
    PerfilPage,
    TabsPage,
    CatalogoPage,
    LoginPage,
    BuscadorxcodigoPage,
    FiltrosPage,
    FormclientePage,
    SeleccionproductosPage,
    PopupclientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CatalogoPage,
    PedidoPage,
    ClientesPage,
    PerfilPage,
    TabsPage,
    LoginPage,
    BuscadorxcodigoPage,
    FiltrosPage,
    FormclientePage,
    SeleccionproductosPage,
    PopupclientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuariosProvider,
    ArticulosProvider,
    PedidosProvider,
    ClientesProvider
  ]
})
export class AppModule {}
