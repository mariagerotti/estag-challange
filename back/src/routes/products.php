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
            $amount = filter_input(INPUT_POST, "amount", FILTER_SANITIZE_NUMBER_INT);
            $price = filter_input(INPUT_POST, "price", FILTER_SANITIZE_NUMBER_FLOAT);
            $category_code = filter_input(INPUT_POST, "category_code", FILTER_SANITIZE_NUMBER_INT);
            echo postProducts($name, $amount, $price, $category_code);
            break;

        case 'DELETE':
            $delete = $_GET["code"];
            echo deleteProducts($delete);
            break;
    }
}

runMethods();
?>