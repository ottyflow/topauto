import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { Articulo } from '../../interfaces/articulo.interface';

/**
 * Generated class for the SeleccionproductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-seleccionproductos',
  templateUrl: 'seleccionproductos.html',
})
export class SeleccionproductosPage {

  currentNumber1 = 0;
  currentNumber2 = 0;
  currentNumber3 = 0;
  currentNumber4 = 0;
  currentNumber5 = 0;
  currentNumber6 = 0;
  totalCantidades= 0;
  totalPrecio: any;
  precio : any;
  articulo : any;
  codigoArticulo:any= 0;
  solocodigo:any;
  articulocopia =  new Articulo();
  nuevoArticulo:Articulo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private _ps:PedidosProvider) {

      this.articulocopia = this.navParams.get("articulo");
      if(this.articulocopia != undefined){
        this.totalPrecio = this.articulocopia.precio;
        this.precio = this.articulocopia.precio;
        this.articulo = this.articulocopia;
        this.creacionNuevoArticulo();
      }
  }

  closeModal(procesa:any){
    if(procesa==0){
      this.cancelar();
    }else{
      this.nuevoArticulo.setPrecio(this.totalPrecio);
      console.log(this.nuevoArticulo.precio);
      this._ps.agregar_pedido( this.nuevoArticulo);
      this.cancelar();
    }
    this.view.dismiss();
  }

  creacionNuevoArticulo(){
    this.nuevoArticulo = new Articulo();
    this.nuevoArticulo.setCodigo(this.articulocopia.codigo);
    this.nuevoArticulo.setDescripcion(this.articulocopia.descripcion)
    this.nuevoArticulo.setDescripcionAdicional(this.articulocopia.descripcion_adicional);
    this.nuevoArticulo.setImagen(this.articulocopia.imagen);
    this.nuevoArticulo.setPrecio(this.articulocopia.precio);
    this.nuevoArticulo.setPrecio2(this.articulocopia.precio2);
    this.nuevoArticulo.setPrecio3(this.articulocopia.precio3);
  }

  changePrecio(precio){
    if(precio!=null && precio> 0){
      this.precio = precio;
      this.totalPrecio = precio;
    }

  }

  increment1 () {
    this.currentNumber1++;
    console.log(this.currentNumber1);
    this.calculaTotal();
  }

  decrement1 () {
    this.currentNumber1--;
    this.calculaTotal();
  }

  increment2 () {
    this.currentNumber2++;
    this.calculaTotal();
  }

  decrement2 () {
    this.currentNumber2--;
    this.calculaTotal();
  }
  increment3 () {
    this.currentNumber3++;
    this.calculaTotal();
  }

  decrement3 () {
    this.currentNumber3--;
    this.calculaTotal();
  }
  increment4 () {
    this.currentNumber4++;
    this.calculaTotal();
  }

  decrement4 () {
    this.currentNumber4--;
    this.calculaTotal();
  }
  increment5 () {
    this.currentNumber5++;
    this.calculaTotal();
  }

  decrement5 () {
    this.currentNumber5--;
    this.calculaTotal();
  }
  increment6 () {
    this.currentNumber6++;
    this.calculaTotal();
  }

  decrement6 () {
    this.currentNumber6--;
    this.calculaTotal();
  }

  calculaTotal(){
    this.totalCantidades=0;
    this.totalCantidades = (this.currentNumber1+this.currentNumber2+this.currentNumber3+this.currentNumber4+this.currentNumber5+this.currentNumber6);
    console.log(this.totalCantidades);
    if(this.totalCantidades>0){
      this.totalPrecio = 0;
      this.totalPrecio = this.precio * this.totalCantidades;
      console.log(this.totalPrecio);
    }
  }

  cancelar(){
    this.articulo.precio= this.precio;
    this.currentNumber1 = 0;
    this.currentNumber2 = 0;
    this.currentNumber3 = 0;
    this.currentNumber4 = 0;
    this.currentNumber5 = 0;
    this.currentNumber6 = 0;
    this.totalCantidades= 0;
    this.totalPrecio = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionproductosPage');
  }

}
