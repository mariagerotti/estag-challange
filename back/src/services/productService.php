<?php 
header("Acess-Control-Allow-Headers: Content-Type");
header("Acess-Control-Allow-Methods: GET, POST, DELETE");
header("Acess-Control-Allow-Origin: *");
include ('../index.php');

function getProducts(){
    $products = myPDO->query('SELECT * FROM products');
    $products = $products->fetchAll();
    return json_encode($products);
};

function postProducts($name, $price, $amount){
    $acProducts = myPDO->prepare("INSERT INTO products (NAME, PRICE, AMOUNT) VALUES ('{$name}', {$price}, {$amount})");
    $acProducts->execute();
    return ("deu certo");
};

function deleteProducts(){
    $removeProducts = myPDO->prepare('DELETE FROM products WHERE code=1');
    $removeProducts->execute();
};
?>