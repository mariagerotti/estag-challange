<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT");
include('../services/categoryService.php');

function runMethods()
{
    $method = $_SERVER['REQUEST_METHOD'];

    switch ($method) {
        case 'GET':
            echo getCategories();
            break;

        case 'POST':
            $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);
            $tax = filter_input(INPUT_POST, "tax", FILTER_SANITIZE_NUMBER_FLOAT);
            echo postCategories($name, $tax);
            break;

        case 'DELETE':
            $delete = $_GET["code"];
            echo deleteCategories($delete);
            break;
    }
}

runMethods();
