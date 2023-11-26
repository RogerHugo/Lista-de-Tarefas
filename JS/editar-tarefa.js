window.onload = function(){
    GetTarefa(GetValorParametro())
}
document.querySelector("button#atualizar").addEventListener("Click", function(){
    
})

function GetValorParametro()
{
    const search = window.location.search;
    const indice = search.indexOf('=') + 1; //1
    return search.substring(indice);
}

/*function teste()
{
    let dados = GetTarefa(24)
    console.log(dados)
    let n = dados.then(data => console.log(data)).value
    console.log(n)
}*/

function GetTarefa(id)
{   
    const url = "api/tarefas/index.php?id="+id
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        LoadData(data)
    })
    .catch(error => console.error("erro:", error))
}

document.querySelector("button#atualizar").addEventListener("click", function(){
    let id = GetValorParametro()
    let titulo = document.querySelector("input#titulo").value
    let conteudo = document.querySelector("textarea#conteudo").value

    PutTarefa(id, titulo, conteudo)
})


function PutTarefa(id, titulo, conteudo)
{
    const url = "api/tarefas/editar.php"
    const data = {id: id, titulo: titulo, conteudo: conteudo}
    const options = {method: "PUT", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)}

    fetch(url, options)
    .then(response => response.json())
    .then(data => {
        if(data.status == "sucess"){
            alert("Sucess")
            location.href = "index.php"
        }
    })
    .catch(error => console.error("erro:", error))
}

function LoadData(data)
{
    let titulo = data.titulo
    let conteudo = data.conteudo
    AddData(titulo, conteudo)
}
function AddData(titulo, conteudo)
{
    document.querySelector("input#titulo").value = titulo
    document.querySelector("textarea#conteudo").value = conteudo
}

