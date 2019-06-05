import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Events, ViewController } from 'ionic-angular';
import { LocalidadesProvider } from '../../providers/localidades/localidades';

@Component({
  selector: 'page-abmlocalidades',
  templateUrl: 'abmlocalidades.html',
})
export class AbmlocalidadesPage {

  localidades:any []=[];

  constructor(public navCtrl: NavController, private view: ViewController, public navParams: NavParams, private modal: ModalController, private _ls:LocalidadesProvider , public events: Events) {
  }

  generateLocalidades(){
    if(this.localidades==undefined){
      this.localidades = this._ls.localidades;
    }
  }

  getLocalidades(ev: any){
    this.generateLocalidades();
    let serVal = ev.target.value;
    if(serVal&& serVal.trim() !='') {
      this._ls.localidades = this._ls.localidades.filter((item) => {
        if(item.nombre!= null){
        return (item.nombre.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
        }
      })
    }else{
      this._ls.cargar_localidades();
    }
  }

  closeModal(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbmlocalidadesPage');
  }

  ionViewWillEnter() {
      this._ls.cargar_localidades();
  }
}
