<?php 
include ('../services/productService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getProducts();
            break;

        case 'POST':
            $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
            $price = filter_input(INPUT_POST, "price", FILTER_SANITIZE_NUMBER_INT);
            $amount = filter_input(INPUT_POST, "amount", FILTER_SANITIZE_NUMBER_INT);
            echo postProducts($name, $price, $amount);
            break;

        case 'DELETE':
            echo deleteProducts();
            break;
    }
}

runMethods();
?>