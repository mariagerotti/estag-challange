<?php 
include ('../services/categoryService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getCategories();
            break;

        case 'POST':
            $name = $_POST['name'];
            $tax = $_POST['tax'];
            echo postCategories($name, $tax);
            break;

        case 'DELETE':
            echo deleteCategories();
            break;
    }
}

runMethods();

?>