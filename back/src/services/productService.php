<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include ('../index.php');

function getProducts(){
    $products = myPDO->query("SELECT 
    PRODUCTS.*, CATEGORIES.TAX, CATEGORIES.NAME AS CATEGORYNAME FROM PRODUCTS JOIN CATEGORIES ON PRODUCTS.CATEGORY_CODE = CATEGORIES.CODE");
    $products = $products->fetchAll();
    return json_encode($products);
};

// function readAllProducts(){
//     $readAllProducts = myPDO->query("SELECT
//         products.code,
//         products.name,
//         products.price,
//         products.amount,
//         categories.tax,
//         categories.name as category_name,
//         trunc((categories.tax / 100 * products.price), 2) as tax_value,
//         trunc((categories.tax / 100 * products.price + products.price), 2) as products_with_tax
//             from
//                 products
//             JOIN
//                 categories
//             ON
//             products.category_code = categories.code");
//     $data = $readAllProducts->fetchAll(PDO::FETCH_ASSOC);
//     return $data;
// }
 

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