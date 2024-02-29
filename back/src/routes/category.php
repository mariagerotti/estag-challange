<?php 
include ('../services/categoryService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getCategories();
            break;

        case 'POST':
            echo postCategories();
            break;

        case 'DELETE':
            echo deleteCategories();
            break;
    }
}


?>