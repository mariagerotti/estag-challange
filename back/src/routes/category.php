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
            $id = $_POST['id'];
            $tax = $_POST['tax'];
            echo postCategories($id, $name, $tax);
            break;

        case 'DELETE':
            echo deleteCategories();
            break;
    }
}

runMethods();

?>