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
    $query = $this->db->query('select p.codigo as codigo, p.descripcion as descripcion, p.descripcion_adicional as descripcion_adicional, p.precio as precio, p.precio2, p.precio3, p.id_marca, m.nombre as nombremarca, p.id_categoria, c.nombre as nombrecategoria, imagen, activo, oferta_volumen, envase_nuevo, escala_descuento, oferta_lanzamiento, agotar_stock, embarque, fragancias, talles  from productos p LEFT OUTER JOIN marcas m on p.id_marca = m.codigo LEFT OUTER JOIN categorias c on p.id_categoria = c.codigo where activo = 0');
    $respuesta = array(
        'error'=> FALSE,
        'productos' => $query->result_array()
  );
    $this->response( $respuesta );
  }

  public function articulo_get($codigo){
    $query = $this->db->query("SELECT * FROM `productos` WHERE codigo = '".$codigo."'");
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
