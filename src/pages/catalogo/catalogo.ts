import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Articulo } from '../../interfaces/articulo.interface';
import { ARTICULOS } from '../../data/data.articulos';


@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  articulos:Articulo[] = [];

  muestraArticulo (articulo:Articulo){
    if(articulo.activo = false){
      
      return;
    }
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.articulos = ARTICULOS;

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

}
