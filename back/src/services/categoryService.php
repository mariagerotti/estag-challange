<?php 
include ('../index.php');
 
function getCategories(){
    $categories = myPDO->query('SELECT * FROM CATEGORIES');
    $categories = $categories->fetchAll();
    return json_encode($categories);
};

function postCategories($name, $tax){
    $acCategories = myPDO->prepare("INSERT INTO CATEGORIES (NAME, TAX) VALUES ('{$name}', {$tax})");
    $acCategories->execute();
    return "Criado mudo";
};

function deleteCategories($code){
    $removeCategories = myPDO->prepare("DELETE FROM CATEGORIES WHERE CODE = {$code}");
    $removeCategories->execute();
    return "apagado";
};
?>