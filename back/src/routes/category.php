<?php 
include ('../services/categoryService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getCategories();
            break;

        case 'POST':
            $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
            $price = filter_input(INPUT_POST, "price", FILTER_SANITIZE_NUMBER_INT);
            $amount = filter_input(INPUT_POST, "amount", FILTER_SANITIZE_NUMBER_INT);
            // $price = filter_input(INPUT_POST, "price", FILTER_SANITIZE_NUMBER_INT); // chave estrangeira do codigo

            echo postCategories($name, $price, $amount);
            break;

        case 'DELETE':
            echo deleteCategories();
            break;
    }
}

runMethods();

?>