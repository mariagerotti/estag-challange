<?php 
include ('../index.php');
 
function getOrder(){
    $orders = myPDO->query("SELECT * FROM ORDERS");
    $orders = $orders->fetchAll();
    return json_encode($orders);
};

function postOrders($tax, $total){
    $code = 1;
    $orders = myPDO->query("SELECT * FROM ORDERS");
    $orders = $orders->fetchAll();
    $orders = count($orders);
    $code += $orders;
    $acOrders = myPDO->prepare("INSERT INTO ORDERS (CODE, TAX, TOTAL) VALUES ({$code}, {$tax}, {$total})");
    $acOrders->execute();
    return json_encode(array($code));
};

function deleteOrders($code){
    $removeOrders = myPDO->prepare("DELETE FROM ORDERS WHERE CODE = {$code}");
    $removeOrders->execute();
    return "apagado";
};
?>