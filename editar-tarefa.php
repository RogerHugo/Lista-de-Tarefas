<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Tarefa</title>
    <link rel="stylesheet" href="css/all.css">
    <link rel="stylesheet" href="css/criar-editar-tarefa.css">
</head>
<body>
    <header>
        <button onclick="PaginaAnterior()">Voltar</button>
    </header>
    <main>
        Titulo<br>
        <input type = "text" id = "titulo" value = ""><br>
        Conteudo<br>
        <textarea id = "conteudo" value = ""></textarea><br>
        <button id = "atualizar" >Atualizar</button>
    </main>
    <footer></footer>

    <script src = "JS/editar-tarefa.js"></script>
    <script src = "JS/criar-editar-tarefa.js"></script>
</body>
</html>