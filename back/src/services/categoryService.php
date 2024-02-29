<?php 
header("Acess-Control-Allow-Headers: Content-Type");
header("Acess-Control-Allow-Methods: GET, POST, DELETE");
header("Acess-Control-Allow-Origin: *");
include ('../index.php');

function getCategories(){
    $categories = myPDO->query('SELECT * FROM categories');
    $categories = $categories->fetchAll();
    return json_encode($categories);
};

function postCategories($id, $name, $tax){
    $acCategories = myPDO->prepare("INSERT INTO categories (CODE, NAME, TAX) VALUES ({$id}, '{$name}', {$tax})");
    $acCategories->execute();
    return "Criado mudo";
};

function deleteCategories(){
    $removeCategories = myPDO->prepare('DELETE FROM categories WHERE code=1');
    $removeCategories->execute();
};
?>