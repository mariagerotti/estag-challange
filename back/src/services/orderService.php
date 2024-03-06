<?php 
include ('../index.php');
 
function getOrder(){
    $orders = myPDO->query("SELECT * FROM ORDERS");
    $orders = $orders->fetchAll();
    return json_encode($orders);
};

function postOrders($tax, $total){
    $id = 1;
    $orders = myPDO->query("SELECT * FROM ORDERS");
    $orders = $orders->fetchAll();
    $orders = count($orders);
    $id += $orders;


    $acOrders = myPDO->prepare("INSERT INTO ORDERS (CODE, TAX, TOTAL) VALUES ({$id}, {$tax}, {$total})");
    $acOrders->execute();
    return json_encode(array($id));
};

function deleteOrders($code){
    $removeOrders = myPDO->prepare("DELETE FROM ORDERS WHERE CODE = {$code}");
    $removeOrders->execute();
    return "apagado";
};
?>