<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../services/orderService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getOrder();
            break;

        case 'POST':
            $tax = filter_input(INPUT_POST, "tax", FILTER_SANITIZE_NUMBER_FLOAT);
            $total = filter_input(INPUT_POST, "total", FILTER_SANITIZE_NUMBER_FLOAT);
            echo postOrders($tax, $total);
            break;

        case 'DELETE':
            $delete = $_GET["code"];
            echo deleteOrders($delete);
            break;
    }
}

runMethods();
?>