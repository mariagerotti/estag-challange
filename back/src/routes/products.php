<?php 
include ('../services/productService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getProduct();
            break;

        case 'POST':
            $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
            $tax = filter_input(INPUT_POST, "tax", FILTER_SANITIZE_NUMBER_INT);
            echo postProduct();
            break;

        case 'DELETE':
            echo deleteProduct();
            break;
    }
}


?>