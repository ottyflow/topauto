import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';

/**
 * Generated class for the BuscadorxcodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscadorxcodigo',
  templateUrl: 'buscadorxcodigo.html',
})
export class BuscadorxcodigoPage {

  queryText:any;
  datoarticulo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private modal: ModalController, private _as:ArticulosProvider) {
  }

  closeModal(busca:any,queryText){
    if(busca==0){
      this.view.dismiss();
    }else{
      this.view.dismiss();
      if(queryText!=undefined){
        this._as.cargar_articulo(queryText);
        const myModal =  this.modal.create('SeleccionproductosPage');
        myModal.present();
      }
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscadorxcodigoPage');
  }

}
