<?php 
require_once "../bdconnection.php";
include "Tarefas.php";

header('Content-Type: application/json');

$Tarefas = new Tarefa($conn);

if($_SERVER["REQUEST_METHOD"] === "GET")
{
    if(!(isset($_GET["id"])))
    {
        echo json_encode($Tarefas->getAllTarefas());
    }
    else
    {
        $id = $_GET["id"];
        echo json_encode($Tarefas->getTarefa($id));
    }
}