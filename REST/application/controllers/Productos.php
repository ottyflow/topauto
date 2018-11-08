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
    $query = $this->db->query('SELECT * FROM `productos`');
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
