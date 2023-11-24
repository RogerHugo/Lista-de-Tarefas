<?php
include "index.php";

if($_SERVER["REQUEST_METHOD"] === "POST")
{
    $data = new stdClass();
    $data = json_decode(file_get_contents('php://input'));
    $titulo = $data->titulo;
    $conteudo = $data->conteudo;

    echo json_encode(["status" => $Tarefas->criarTarefa($titulo, $conteudo)]);
}
