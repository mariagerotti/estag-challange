<?php 
include ('../services/cartService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getCart();
            break;

        case 'POST':
            echo postCart();
            break;

        case 'DELETE':
            echo deleteCart();
            break;
    }
}


?>