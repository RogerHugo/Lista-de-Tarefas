
document.querySelector("button#criar").addEventListener("click", function(){
    let titulo = document.querySelector("input#titulo").value
    let conteudo = document.querySelector("textarea#conteudo").value
    CreateTarefa(titulo, conteudo)
})

function CreateTarefa(titulo, conteudo)
{
    const url = "api/tarefas/criar.php"
    const data = { titulo: titulo, conteudo: conteudo }
    const options = { method: "POST", headers: {'Content-Type': 'application/json'}, body:JSON.stringify(data) } 

    fetch(url,options)
    .then(response => response.json())
    .then(data => {
        if(data.status == "sucess"){
            alert("Sucesso")
            location.href = "index.php"
        }
        console.log(data)
    })
    .catch(error => console.error("erro:",error))
}