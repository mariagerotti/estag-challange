<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../index.php');
 
function getOrderItem(){
    $orderItem = myPDO->query("SELECT * FROM ORDER_ITEM");
    $orderItem = $orderItem->fetchAll();
    return json_encode($orderItem);
};

function postOrderItem($code, $order_code, $product_code, $amount, $price, $tax){
    $acorderItem = myPDO->prepare("INSERT INTO ORDER_ITEM (CODE, ORDER_CODE, PRODUCT_CODE, AMOUNT, PRICE, TAX) VALUES ({$code}, {$order_code}, {$product_code}, {$amount}, {$price}, {$tax})");
    $acorderItem->execute();
    return "Criado mudo";
};

function deleteOrderItem($code){
    $removeOrderItem = myPDO->prepare("DELETE FROM ORDER_ITEM WHERE CODE = {$code}");
    $removeOrderItem->execute();
    return "apagado";
};
?>