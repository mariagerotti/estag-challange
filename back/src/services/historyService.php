<?php 
header("Acess-Control-Allow-Headers: Content-Type");
header("Acess-Control-Allow-Methods: GET, POST, DELETE");
header("Acess-Control-Allow-Origin: *");
include ('../index.php')

function getHistory(){
    $history = myPDO->query('SELECT * FROM history');
    $history = $history->fetchAll();
    return json_encode($history);
};

function postHistory(){
    $acHistory = myPDO->prepare("INSERT INTO history (CODE, NAME, TAX) VALUES (1,'fruta', 2)");
    $acHistory->execute();
};

function deleteHistory(){
    $removeHistory = myPDO->prepare('DELETE FROM history WHERE code=1');
    $removeHistory->execute();
};
?>