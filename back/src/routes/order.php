<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
header('Content-Type: application/json; charset=utf-8');
require("../services/orderService.php");

error_log("Entrou aqui pelo menos");

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