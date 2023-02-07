<?php 
//Use to fetch product data
class Product {
public $db = null;

public function __construct(DBController $db) {
    if(!isset($db->con)) return null;
    $this->db=$db;
}
}


?>