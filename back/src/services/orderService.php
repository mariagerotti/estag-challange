<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../index.php');
 
function getOrder(){
    $orders = myPDO->query("SELECT * FROM ORDERS");
    $orders = $orders->fetchAll();
    return json_encode($orders);
};

function postOrders($code, $tax, $total){
    $acOrders = myPDO->prepare("INSERT INTO ORDERS (CODE, TAX, TOTAL) VALUES ({$code}, {$tax}, {$total})");
    $acOrders->execute();
    return "Criado mudo";
};

function deleteOrders($code){
    $removeOrders = myPDO->prepare("DELETE FROM ORDERS WHERE CODE = {$code}");
    $removeOrders->execute();
    return "apagado";
};
?>