window.onload = function(){
    GetTarefas()
}
function GetTarefas()
{
    fetch("api/tarefas/")
    .then(response => response.json())
    .then(data => carregarDados(data))
    .catch(error => console.error("Erro", error))   
}
console.log()


function CreateTarefa(titulo, conteudo)
{
    const url = "api/tarefas/criar.php"
    const data = { titulo: titulo, conteudo: conteudo }
    const options = { method: "POST", headers: {'Content-Type': 'application/json'}, body:JSON.stringify(data) } 

    fetch(url,options)
    .then(response => response.json())
    .then(data => console.log(data), AtualizarDados())
    .catch(error => console.error("erro:",error))
}

function DeleteTarefa(id)
{
    const url = "api/tarefas/excluir.php"
    const data = {id: id}
    const options = { method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) }

    fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data), AtualizarDados())
    .catch(error => console.error("Erro:", error))
}

function PutTarefa(id, titulo, conteudo)
{
    const url = "api/tarefas/editar.php"
    const data = {id: id, titulo: titulo, conteudo: conteudo}
    const options = {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)}

    fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data), AtualizarDados())
    .catch(error => console.error("erro:", error))
}


//===================================================
//             FUNÇÕES SECUNDÀRIAS
//===================================================
function carregarDados(data)
{
    console.log(document.querySelector("div#tarefa"))

    for(let i = 0; i < data.length; i++)
    {
        let id = data[i].id
        let titulo = data[i].titulo
        let conteudo = data[i].conteudo
        addTarefa(id, titulo, conteudo)
    }
    
}

function addTarefa(id, titulo, conteudo)
{
    let botoes = `<div> <button onclick = 'PutTarefa(${id}, ${titulo}, ${conteudo})'>Editar</button> <button onclick = 'DeleteTarefa(${id})'>Excluir</button> </div>`
    let tarefa = `<div id = 'tarefa'><div><h2>${titulo}</h2><p>${conteudo}<p></div>${botoes}</div>`
    
    document.querySelector("div#tarefas").innerHTML += tarefa   
}

function AtualizarDados()
{
    document.querySelector("div#tarefas").innerHTML = "" 
    GetTarefas()
}