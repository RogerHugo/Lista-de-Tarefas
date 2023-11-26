window.onload = function(){
    GetTarefas()
}

/* #######  FUNÇÕES de Requisição ########### */
function GetTarefas()
{
    fetch("api/tarefas/")
    .then(response => response.json())
    .then(data => carregarDados(data))
    .catch(error => console.error("Erro", error))   
}

function DeleteTarefa(id)
{
    const url = "api/tarefas/excluir.php"
    const data = {id: id}
    const options = { method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data) }

    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        if(data.status == "sucess"){
            alert("Sucess")
        }
        console.log(data)
        AtualizarDados()
    })
    .catch(error => console.error("Erro:", error))
}

/* ############*/
function CriarTarefa()
{
    location.href = "criar-tarefa.php"
}
function EditarTarefa(id)
{
    location.href = "editar-tarefa.php?id="+id
    //window.open("editar-tarefa.php?id="+id, "_self")
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
    let botoes = `<div> <button onclick = 'EditarTarefa(${id})'>Editar</button> <button onclick = 'DeleteTarefa(${id})'>Excluir</button> </div>`
    let tarefa = `<div id = 'tarefa'><div><h2>${titulo}</h2><p>${conteudo}<p></div>${botoes}</div>`
    
    document.querySelector("div#tarefas").innerHTML += tarefa   
}

function AtualizarDados()
{
    document.querySelector("div#tarefas").innerHTML = "" 
    GetTarefas()
}

