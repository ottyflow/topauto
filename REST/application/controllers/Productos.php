<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once( APPPATH.'/libraries/REST_Controller.php' );
use Restserver\libraries\REST_Controller;


class Productos extends REST_Controller {

  public function __construct(){

    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");

    parent::__construct();
    $this->load->database();

  }

  public function index_get(){
  $query = $this->db->query("select p.codigo, p.descripcion, p.descripcion_adicional, p.precio, p.precio2, p.precio3, p.id_marca, COALESCE (m.nombre, '".''."')as nombreMarca, p.id_categoria, COALESCE(c.nombre, '".''."') as nombreCategoria, p.imagen, p.activo, p.oferta_volumen, p.envase_nuevo, p.escala_descuento, p.oferta_lanzamiento, p.agotar_stock, p.embarque, p.fragancias, p.talles, p.created_at, p.updated_at from productos p LEFT OUTER JOIN marcas m on p.id_marca = m.codigo LEFT OUTER JOIN categorias c ON p.id_categoria = c.codigo where activo = 0");
    $respuesta = array(
        'error'=> FALSE,
        'productos' => $query->result_array()
  );
    $this->response( $respuesta );
  }

  public function articulo_get($codigo){
    $query = $this->db->query("select p.codigo, p.descripcion, p.descripcion_adicional, p.precio, p.precio2, p.precio3, p.id_marca, COALESCE (m.nombre, '".''."')as nombreMarca, p.id_categoria, COALESCE(c.nombre, '".''."') as nombreCategoria, p.imagen, p.activo, p.oferta_volumen, p.envase_nuevo, p.escala_descuento, p.oferta_lanzamiento, p.agotar_stock, p.embarque, p.fragancias, p.talles, p.created_at, p.updated_at from productos p LEFT OUTER JOIN marcas m on p.id_marca = m.codigo LEFT OUTER JOIN categorias c ON p.id_categoria = c.codigo WHERE p.codigo = '".$codigo."'");
    $articulo = $query->row();
    $respuesta = array(
                  'error' => FALSE,
                  // 'codigo' =>$cliente->codigo,
                  // 'razonsocial' =>$cliente->razon_social,
                  // 'nombrefantasia' =>$cliente->nombre_fantasia,
                  'articulo' => $articulo,
                );
    $this->response( $respuesta );
  }

}
