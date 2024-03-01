<?php 
header("Acess-Control-Allow-Headers: Content-Type");
header("Acess-Control-Allow-Methods: GET, POST, DELETE");
header("Acess-Control-Allow-Origin: *");
include ('../index.php');

function getProducts(){
    $products = myPDO->query('SELECT * FROM PRODUCTS');
    $products = $products->fetchAll();
    return json_encode($products);
};

function postProducts($name, $price, $amount){
    $acProducts = myPDO->prepare("INSERT INTO PRODUCTS (NAME, PRICE, AMOUNT) VALUES ('{$name}', {$price}, {$amount})");
    $acProducts->execute();
    return ("deu certo");
};

function deleteProducts(){
    $removeProducts = myPDO->prepare('DELETE FROM PRODUCTS WHERE CODE  = {}');
    $removeProducts->execute();
};
?>