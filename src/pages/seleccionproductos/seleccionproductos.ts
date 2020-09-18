import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import { Articulo } from '../../interfaces/articulo.interface';

@Component({
  selector: 'page-seleccionproductos',
  templateUrl: 'seleccionproductos.html',
})
export class SeleccionproductosPage {

  currentNumber = 0
  totalCantidades = 0;
  totalPrecio: any;
  precio: any;
  articulo: any;
  codigoArticulo: any = 0;
  solocodigo: any;
  articulocopia = new Articulo();
  nuevoArticulo: Articulo;
  itemCantidad: number = 0;
  fragancias = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private _ps: PedidosProvider, private _as: ArticulosProvider) {
    this.articulocopia = this.navParams.get("articulo");
    if (this.articulocopia != undefined) {
      this.totalPrecio = this.articulocopia.precio;
      this.precio = this.articulocopia.precio;
      this.articulo = this.articulocopia;
      this.creacionNuevoArticulo();
    }
  }

  closeModal(procesa: any) {
    if (procesa == 0) {
      this.cancelar();
    } else {
      this.nuevoArticulo.setPrecio(this.totalPrecio);
      this.nuevoArticulo.setCantidad(this.totalCantidades);
      if (this.nuevoArticulo.cantidad == 0) {
        this.nuevoArticulo.setCantidad(1);
      }
      this._ps.agregar_pedido(this.nuevoArticulo);
      this.cancelar();
    }
    this.view.dismiss();
  }

  creacionNuevoArticulo() {
    this.nuevoArticulo = new Articulo();
    this.nuevoArticulo.setCodigo(this.articulocopia.codigo);
    this.nuevoArticulo.setDescripcion(this.articulocopia.descripcion)
    this.nuevoArticulo.setDescripcionAdicional(this.articulocopia.descripcion_adicional);
    this.nuevoArticulo.setImagen(this.articulocopia.imagen);
    this.nuevoArticulo.setPrecio(this.articulocopia.precio);
    this.nuevoArticulo.setPrecio2(this.articulocopia.precio2);
    this.nuevoArticulo.setPrecio3(this.articulocopia.precio3);
    this.nuevoArticulo.setCantidad(this.totalCantidades);
    this.nuevoArticulo.setOfertaVolumen(this.articulocopia.oferta_volumen);
    this.nuevoArticulo.setEnvaseNuevo(this.articulocopia.envase_nuevo);
    this.nuevoArticulo.setEscalaDescuento(this.articulocopia.envase_nuevo);
    this.nuevoArticulo.setOfertaLanzamiento(this.articulocopia.oferta_lanzamiento);
    this.nuevoArticulo.setAgotarStock(this.articulocopia.agotar_stock);
    this.nuevoArticulo.setEmbarque(this.articulocopia.embarque);
  }

  changePrecio(precio) {
    if (precio != null && precio > 0) {
      this.precio = precio;
      this.totalPrecio = precio;
    }
  }

  increment(item) {
    this.articulo.cantidad++;
    this.totalCantidades++;
    this.calculaTotal();
  }

  decrement(item) {
    if (item.cantidad > 0){
      item.cantidad--;
      this.totalCantidades--;
      this.calculaTotal();
    }
  }

  recalcula(){
    this.totalCantidades = 0;
    if (this.articulo.fragancias == 1 ){
      for (let fragancia of this._as.fragancias ) {
        if(fragancia.cantidad > 0) {
            this.totalCantidades = this.totalCantidades + parseInt(fragancia.cantidad);
        }
      }
    } else if ( this.articulo.talles == 1) {
      for (let talle of this._as.talles ) {
        if(talle.cantidad > 0) {
            this.totalCantidades = this.totalCantidades + parseInt(talle.cantidad);
        }
      }
    } else {
      this.totalCantidades = this.totalCantidades + parseInt(this.articulo.cantidad);
    }
    this.calculaTotal();
  }

  calculaTotal() {
    if (this.totalCantidades > 0) {
      this.totalPrecio = 0;
      this.totalPrecio = (this.precio * this.totalCantidades).toFixed(2);
      console.log(this.totalPrecio);
    }
  }

  cancelar() {
    this.articulo.precio = this.precio;
    this.currentNumber = 0;
    this.totalCantidades = 0;
    this.totalPrecio = 0.00;
  }

  ionViewWillEnter() {
    if(this.articulocopia.fragancias == "1"){
      this._as.cargar_fragancias(this.articulocopia.codigo);
    }
    if(this.articulocopia.talles == "1"){
      this._as.cargar_talles(this.articulocopia.codigo);
    }
  }

}
