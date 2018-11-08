<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once( APPPATH.'/libraries/REST_Controller.php' );
use Restserver\libraries\REST_Controller;


class Clientes extends REST_Controller {

  public function __construct(){

    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");

    parent::__construct();
    $this->load->database();

  }

  public function index_get(){
    $query = $this->db->query('SELECT * FROM `clientes`');
    $respuesta = array(
        'error'=> FALSE,
        'clientes' => $query->result_array()
  );
    $this->response( $respuesta );
  }

  public function cliente_get($codigo){
    $query = $this->db->query("SELECT * FROM `clientes` WHERE codigo = '".$codigo."'");
    $cliente = $query->row();
    $respuesta = array(
                  'error' => FALSE,
                  // 'codigo' =>$cliente->codigo,
                  // 'razonsocial' =>$cliente->razon_social,
                  // 'nombrefantasia' =>$cliente->nombre_fantasia,
                  'cliente' => $cliente,
                );
    $this->response( $respuesta );
  }

  public function insertar_post(){
    $data = $this->post();
    $data = array(
      'codigo'=> $data['codigo'],
      'razon_social'=>$data['razon_social'],
      'nombre_fantasia'=>$data['nombre_fantasia'],
      'id_provincia'=>$data['id_provincia'],
      'id_iva'=>$data['id_iva'],
      'id_localidad'=>$data['id_localidad'],
      'email'=>$data['email'],
      'web'=>$data['web'],
      'cuenta'=>$data['cuenta'],
      'cuit'=>$data['cuit'],
      'telefono'=>$data['telefono'],
      'telefono2'=>$data['telefono2'],
      'direccion'=>$data['direccion'],
      'codigo_postal'=>$data['codigo_postal']
    );
    $this->db->insert('clientes', $data);
    $respuesta = array(
                  'error' => FALSE,
                  'cliente' => $data,
                );
    $this->response( $respuesta );
  }
}
