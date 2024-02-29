<?php 
include ('../services/historyService.php');


function runMethods(){
    $method=$_SERVER['REQUEST_METHOD'];

    switch($method){
        case 'GET':
            echo getHistory();
            break;

        case 'POST':
            echo postHistory();
            break;

        case 'DELETE':
            echo deleteHistory();
            break;
    }
}

?>