<?php
include "index.php";

if($_SERVER["REQUEST_METHOD"] === "PUT")
{
    $data = new stdClass();
    $data = json_decode(file_get_contents('php://input'));
    
    $id = $data->id;
    $titulo = $data->titulo;
    $conteudo = $data->conteudo;

    echo json_encode(["status" => $Tarefas->editarTarefa($id, $titulo, $conteudo)]);
}