<?php 
header("Acess-Control-Allow-Headers: Content-Type");
header("Acess-Control-Allow-Methods: GET, POST, DELETE");
header("Acess-Control-Allow-Origin: *");
include ('../index.php')

function getCart(){
    $cart = myPDO->query('SELECT * FROM cart');
    $cart = $cart->fetchAll();
    return json_encode($cart);
};

function postCart(){
    $acCart = myPDO->prepare("INSERT INTO cart (CODE, TOTAL, TAX) VALUES (1, 1, 2)");
    $acCart->execute();
};

function deleteCart(){
    $removeCart = myPDO->prepare('DELETE FROM cart WHERE code=1');
    $removeCart->execute();
};
?>