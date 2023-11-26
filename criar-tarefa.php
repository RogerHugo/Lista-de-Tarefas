<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criar Tarefa</title>
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
        <textarea id = "conteudo"></textarea><br>
        <button id = "criar">Criar</button>
    </main>
    <footer></footer>

    <script src = "JS/criar-tarefa.js"></script>
    <script src = "JS/criar-editar-tarefa.js"></script>
</body>
</html>