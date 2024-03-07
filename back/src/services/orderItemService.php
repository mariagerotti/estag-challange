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
    updateStok($product_code, $amount);
    return "Criado mudo";
};

function deleteOrderItem($code){
    $removeOrderItem = myPDO->prepare("DELETE FROM ORDER_ITEM WHERE CODE = {$code}");
    $removeOrderItem->execute();
    return "apagado";
};

function updateStok($product_code, $amount){
    $read = itensStorage($product_code);
    $newAmount = $read["amount"] - $amount;
    $order_item = myPDO->query("UPDATE PRODUCTS SET AMOUNT = $newAmount WHERE CODE = {$product_code}");
    $order_item = $order_item->execute();
    return "criado!!";
};

function itensStorage($product_code){
    $itensProducts = myPDO->query("SELECT * FROM PRODUCTS WHERE CODE = {$product_code}");
    $itemProduct = $itensProducts->fetch();
    return $itemProduct ;
};
?>