import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import { SeleccionproductosPage } from '../seleccionproductos/seleccionproductos';
import { FiltrosPage } from '../filtros/filtros';
import { Articulo } from '../../interfaces/articulo.interface';
import { UsuariosProvider}  from "../../providers/usuarios/usuarios";
import { PedidosProvider } from '../../providers/pedidos/pedidos';


@Component({
  selector: 'page-catalogo',
  templateUrl: 'catalogo.html',
})
export class CatalogoPage {

  articulos:any [] = [];
  datosarticulo:any=[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private modal: ModalController, private _as:ArticulosProvider, private _ps:PedidosProvider, public _us:UsuariosProvider) {
    this._ps.ultimo_numero(this._us.id_usuario);
  }

  openModal(datoarticulo:any){
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
    const myModal =  this.modal.create(SeleccionproductosPage, {articulo});
    console.log(datoarticulo);
    console.log(articulo);
    myModal.present();
  }

  openModalFiltros(){
    const myModal =  this.modal.create(FiltrosPage)

    myModal.present();
  }

  generateItems(){
    if(this.articulos==undefined){
      this.articulos = this._as.articulos;
    }
  }

  // getItems(ev: any){
  //   this.generate_items();
  //   console.log(this.articulos);
  //   let serVal = ev.target.value;
  //   if(serVal&& serVal.trim() !='') {
  //     this.articulos = this.articulos.filter(function(item){
  //       return (item.descripcion.toLowerCase().indexOf(serVal.toLowerCase()) > -1 );
  //     })
  //     // return this.articulos.filter((item) => {
  //     //     return item.descripcion.toLowerCase().indexOf(serVal.toLowerCase()) > -1;
  //     // });
  //   }
  // }

  getItems(ev: any){
    this.generateItems();
    let serVal = ev.target.value;
    if(serVal&& serVal.trim() !='') {
      this._as.articulos = this._as.articulos.filter((item) => {
        return (item.descripcion.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.nombreMarca.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.nombreCategoria.toLowerCase().indexOf(serVal.toLowerCase()) > -1 || item.codigo.toLowerCase().indexOf(serVal.toLowerCase()) > -1 );
      })
    }else{
      this._as.cargar_articulos();
    }

  }



  public isSearchBarOpened = false;

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatalogoPage');
  }

  ionViewWillEnter() {
    if(this.articulos.length == 0){
      this.articulos= new Array();
      console.log(this.articulos.length);
      this._as.cargar_articulos();
      console.log(this.articulos);
    }
    this._ps.ultimo_numero(this._us.id_usuario);
  }
}
