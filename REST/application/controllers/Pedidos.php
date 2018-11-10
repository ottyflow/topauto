<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once( APPPATH.'/libraries/REST_Controller.php' );
use Restserver\libraries\REST_Controller;


class Pedidos extends REST_Controller {


  public function __construct(){

    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding");
    header("Access-Control-Allow-Origin: *");


    parent::__construct();
    $this->load->database();

  }

  public function index_get($usuarioId){
    $query = $this->db->query("SELECT * FROM `pedidoscab` WHERE id_vendedor = '".$usuarioId."'");
    $respuesta = array(
        'error'=> FALSE,
        'pedidosCab' => $query->result_array()
  );
    $this->response( $respuesta );
  }

  public function getdetalles_get($transaccion){
    $query = $this->db->query("SELECT * FROM `pedidosdet` WHERE transaccion = '".$transaccion."'");
    $respuesta = array(
        'error'=> FALSE,
        'pedidosdet' => $query->result_array()
    );
    $this->response( $respuesta );
  }

  public function insertCab_post(){
    $data = $this->post();
    $data = array(
      'id_transaccion'=> $data['id_transaccion'],
      'numero'=> $data['numero'],
      'id_cliente'=> $data['id_cliente'],
      'id_vendedor'=> $data['id_vendedor'],
      'total'=> $data['total'],
      'id_mpago'=> $data['id_mpago'],
      'controlado'=> $data['controlado'],
      'descuento'=> $data['descuento'],
      'notas'=> $data['notas'],
      'created_at'=> $data['created_at'],
      'updated_at'=> $data['updated_at']
    );
    $this->db->insert('pedidoscab', $data);
    $respuesta = array(
                  'error' => FALSE,
                  'pedidoCab' => 'Insertado correctamente',
                );
    $this->response( $respuesta );
  }

  public function insertDet_post(){
    $data = $this->post();
    $data = array(
        'transaccion'=> $data['transaccion'],
        'articulo'=> $data['articulo'],
        'cantidad'=> $data['cantidad'],
        'precio' => $data['precio'],
        'created_at'=> $data['created_at'],
        'updated_at'=> $data['updated_at']
    );
    $this->db->insert('pedidosdet', $data);
    $respuesta = array(
                  'error' => FALSE,
                  'pedidoDet' => $data,
                );
    $this->response( $respuesta );
  }
}
