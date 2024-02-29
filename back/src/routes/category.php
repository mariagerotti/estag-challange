<?php 
include ('../services/categoryService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getCategories();
            break;

        case 'POST':
            $name = filter_input(INPUT_POST, "name", FILTER_SANITAZE_SPECIAL_CHARS);
            $tax = filter_input(INPUT_POST, "tax", FILTER_SANITAZE_NUMBER_INT);
            echo postCategories($name, $tax);
            break;

        case 'DELETE':
            echo deleteCategories();
            break;
    }
}

runMethods();

?>