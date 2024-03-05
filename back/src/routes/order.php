<?php 
include ('../services/orderService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getOrder();
            break;

        case 'POST':
           $code = filter_input(INPUT_POST, "code", FILTER_SANITIZE_NUMBER_INT);
           $tax = filter_input(INPUT_POST, "tax", FILTER_SANITIZE_NUMBER_FLOAT);
            $total = filter_input(INPUT_POST, "total", FILTER_SANITIZE_NUMBER_FLOAT);
            echo postOrders($code, $tax, $total);
            break;

        case 'DELETE':
            $delete = $_GET["code"];
            echo deleteOrders($delete);
            break;
    }
}

runMethods();
?>