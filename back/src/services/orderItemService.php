<?php 
include ('../index.php');
 
function getOrderItem(){
    $orderItem = myPDO->query("SELECT * FROM ORDER_ITEM");
    $orderItem = $orderItem->fetchAll();
    return json_encode($orderItem);
};

function postOrderItem($order_code, $product_code, $amount, $tax, $price){
    $acorderItem = myPDO->prepare("INSERT INTO ORDER_ITEM (ORDER_CODE, PRODUCT_CODE, AMOUNT, PRICE, TAX) VALUES ({$order_code}, {$product_code}, {$amount}, {$tax}, {$price})");
    $acorderItem->execute();
    return "Criado mudo";
};

function deleteOrderItem($code){
    $removeOrderItem = myPDO->prepare("DELETE FROM ORDER_ITEM WHERE CODE = {$code}");
    $removeOrderItem->execute();
    return "apagado";
};
?>