import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ARTICULOS } from '../../data/data.articulos';


@IonicPage()
@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  articulos:any = [];
  queryText : string;
  datosarticulo:any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController) {

    this.generateItems();

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

  generateItems(){
  this.articulos = ARTICULOS;
  }
  getItems(ev: any){
    this.generateItems();
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
