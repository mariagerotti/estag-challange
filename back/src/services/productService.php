<?php
include ('../index.php');

function getProducts(){
    $products = myPDO->query("SELECT 
    PRODUCTS.*, CATEGORIES.TAX, CATEGORIES.NAME AS CATEGORYNAME FROM PRODUCTS JOIN CATEGORIES ON PRODUCTS.CATEGORY_CODE = CATEGORIES.CODE");
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