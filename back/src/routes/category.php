<?php 
include ('../services/categoryService.php');

function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getCategories();
            break;

        case 'POST':
            $name = filter_input(INPUT_POST, "category-name", FILTER_SANITIZE_SPECIAL_CHARS);
            $tax = filter_input(INPUT_POST, "category-tax", FILTER_SANITIZE_NUMBER_INT);
            echo postCategories($name, $tax);
            break;

        case 'DELETE':
            echo deleteCategories() ;
            break;
    }
}

runMethods();

?>