<?php
include "index.php";

if($_SERVER["REQUEST_METHOD"] === "DELETE")
{
    $data = new stdClass();
    $data = json_decode(file_get_contents('php://input'));
    
    $id = $data->id;

    echo json_encode(["status" => $Tarefas->excluirTarefa($id)]);
}