<!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Tarefa</title>
</head>
<body onload = "GetTarefa(<?php echo $_GET['id'] ?>)">
    <header></header>
    <main>
        Titulo<br>
        <input type = "text" id = "titulo" value = ""><br>
        Conteudo<br>
        <textarea id = "conteudo"></textarea><br>
        <button>Atualizar</button>
    </main>
    <footer></footer>

    <script src = "JS/script-criar-tarefa.js"></script>
</body>
</html>