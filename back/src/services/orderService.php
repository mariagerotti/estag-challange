<?php 
include ('../index.php');
 
function getOrder(){
    $orders = myPDO->query("SELECT * FROM ORDERS");
    $orders = $orders->fetchAll();
    return json_encode($orders);
};

function postOrders($tax, $total){
    $acOrders = myPDO->prepare("INSERT INTO ORDERS (TAX, TOTAL) VALUES ( :tax, :total)");
    $acOrders->execute([
        "tax" => (int) $tax,
        "total" => (int) $total
    ]);
    $code = myPDO->lastInsertId();

    return json_encode(["code" => $code]);
};

function deleteOrders($code){
    $removeOrders = myPDO->prepare("DELETE FROM ORDERS WHERE CODE = {$code}");
    $removeOrders->execute();
    return "apagado";
};
?>