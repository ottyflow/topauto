import { Component } from '@angular/core';

import { CatalogoPage } from '../catalogo/catalogo';
import { PedidoPage } from '../pedido/pedido';
import { ClientesPage } from '../clientes/clientes';
import { PerfilPage } from '../perfil/perfil';

import { ClientesProvider } from '../../providers/clientes/clientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CatalogoPage;
  tab2Root = PedidoPage;
  tab3Root = ClientesPage;
  tab4Root = PerfilPage;

  constructor(private _cs:ClientesProvider) {

  }
}
