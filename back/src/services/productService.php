<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../index.php');

function getProducts(){
    $products = myPDO->query('SELECT * FROM PRODUCTS');
    $products = $products->fetchAll();
    return json_encode($products);
};

function postProducts($name, $price, $amount, $category_code){
    $acProducts = myPDO->prepare("INSERT INTO PRODUCTS (NAME, PRICE, AMOUNT, CATEGORY_CODE) VALUES ('{$name}', {$price}, {$amount}, {$category_code})");
    $acProducts->execute();
    return ("deu certo");
};

function deleteProducts($code){
    $removeProducts = myPDO->prepare("DELETE FROM PRODUCTS WHERE CODE  = {$code}");
    $removeProducts->execute();
};
?>