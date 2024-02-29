<?php 
include ('../services/productService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getProduct();
            break;

        case 'POST':
            echo postProduct();
            break;

        case 'DELETE':
            echo deleteProduct();
            break;
    }
}


?>