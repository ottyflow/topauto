import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ARTICULOS } from '../../data/data.articulos';
import { ArticulosProvider } from '../../providers/articulos/articulos';


@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  articulos:any = [];
  datosarticulo:any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _as:ArticulosProvider) {

    this.articulos=[];
    _as.cargar_articulos();

  }

  openModal(datoarticulo:any){
    const myModal =  this.modal.create('SeleccionproductosPage', {datoarticulo});
    console.log(datoarticulo);
    myModal.present();
  }

  openModalFiltros(){
    const myModal =  this.modal.create('FiltrosPage')

    myModal.present();
  }

  getItems(ev: any){
    let serVal = ev.target.value;
    if(serVal&& serVal.trim() !='') {
      this.articulos = this.articulos.filter((item) => {
        return (item.descripcion.toLowerCase().indexOf(serVal.toLowerCase()) > -1 );
      })
    }
  }


  public isSearchBarOpened = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }
}
