<?php 
include ('../services/orderItemService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getOrderItem();
            break;

        case 'POST':
            $order_code = filter_input(INPUT_POST, "order_code", FILTER_SANITIZE_NUMBER_INT);
            $product_code = filter_input(INPUT_POST, "product_code", FILTER_SANITIZE_NUMBER_INT);
            $amount = filter_input(INPUT_POST, "amount", FILTER_SANITIZE_NUMBER_INT);
            $price = filter_input(INPUT_POST, "price", FILTER_SANITIZE_NUMBER_FLOAT);
            $tax = filter_input(INPUT_POST, "tax", FILTER_SANITIZE_NUMBER_FLOAT);
            echo postOrderItem($order_code, $product_code, $amount, $price, $tax);
            break;

        case 'DELETE':
            $delete = $_GET["code"];
            echo deleteOrderItem($delete);
            break;
    }
}

runMethods();
?>