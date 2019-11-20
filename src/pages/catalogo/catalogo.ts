import { Component, Renderer } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import { SeleccionproductosPage } from '../seleccionproductos/seleccionproductos';
import { Articulo } from '../../interfaces/articulo.interface';
import { UsuariosProvider } from "../../providers/usuarios/usuarios";
import { PedidosProvider } from '../../providers/pedidos/pedidos';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  articulos: any[] = [];
  datosarticulo: any = [];
  count: number = 0;
  queryText:any;
  public aColor: string = "#ffd400";
  public bColor: string = "rgb(70, 70, 72)";
  public isSearchBarOpened = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _as: ArticulosProvider, private _ps: PedidosProvider, public _us: UsuariosProvider, private keyboard: Keyboard) {
    this._ps.ultimo_numero(this._us.id_usuario);
  }

  openModal(datoarticulo: any) {
    let articulo = new Articulo();
    articulo.codigo = datoarticulo.codigo;
    articulo.descripcion = datoarticulo.descripcion;
    articulo.descripcion_adicional = datoarticulo.descripcion_adicional;
    articulo.imagen = datoarticulo.imagen;
    articulo.precio = datoarticulo.precio;
    articulo.precio2 = datoarticulo.precio2;
    articulo.precio3 = datoarticulo.precio3;
    articulo.id_marca = datoarticulo.id_marca;
    articulo.nombreMarca = datoarticulo.nombreMarca;
    articulo.id_categoria = datoarticulo.id_categoria;
    articulo.nombreCategoria = datoarticulo.nombreCategoria;
    articulo.activo = datoarticulo.activo;
    articulo.oferta_volumen = datoarticulo.oferta_volumen;
    articulo.envase_nuevo = datoarticulo.envase_nuevo;
    articulo.escala_descuento = datoarticulo.escala_descuento;
    articulo.oferta_lanzamiento = datoarticulo.oferta_lanzamiento;
    articulo.agotar_stock = datoarticulo.agotar_stock;
    articulo.embarque = datoarticulo.embarque;
    articulo.fragancias = datoarticulo.fragancias;
    articulo.talles = datoarticulo.talles;
    const myModal = this.modal.create(SeleccionproductosPage, { articulo });
    myModal.present();
  }

  generateItems() {
    if (this.articulos == undefined) {
      this.articulos = this._as.articulos;
    }
  }

  getItems(ev: any) {
    this.generateItems();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this._as.articulosFinal = this._as.articulos.filter((item) => {
        return (item.descripcion.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.nombreMarca.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.nombreCategoria.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.codigo.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
      this.queryText = "";
      this.isSearchBarOpened = false;
    } else {
      this.queryText = "";
      this.isSearchBarOpened = false;
      this._as.cargar_articulos();
    }
  }

  changeColor(item){
    if(item.envase_nuevo == '1')
        this.aColor= '#2799d6';
    else
      if(item.oferta_lanzamiento == '1')
        this.aColor = '#63b32e';
      else
        if(item.agotar_stock == '1')
          this.aColor = '#ee7202';
        else
          if(item.embarque == '1')
            this.aColor = '#e30613';
          else
            if(item.oferta_volumen == '1' || item.escala_descuento == '1')
              this.aColor = '#ffd400';
            else
              this.aColor = '#464648';
    return this.aColor;
  }

  changeFondo(item){
    if ((item.envase_nuevo == '0') && (item.oferta_lanzamiento == '0') && (item.agotar_stock == '0') && (item.oferta_volumen == '0') && (item.escala_descuento == '0')){
      return "#F6F8F9";
    }
    return "#464648";
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.count = this._as.articulosFinal.length;
      for (let i = 0; i < 20; i++) {
        this._as.articulosFinal.push(this._as.articulos[this.count]); // this will start pushing next 5 items
        this.count++
      }
      infiniteScroll.complete();
    }, 500);
  }


  ionViewWillEnter() {
    if (this._as.articulos.length == 0) {
      this._as.cargar_articulos();
      this.articulos = this._as.articulosFinal;
    }
    this._ps.ultimo_numero(this._us.id_usuario);
  }
}
