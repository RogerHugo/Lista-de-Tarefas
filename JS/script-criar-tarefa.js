
console.log(document)
console.log(window)


function fazer()
{
    const param = getQueryParam("id")
console.log(param)
}

function GetTarefa(id)
{
    const url = "api/tarefas/index?id="+id
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        console.log(data)    
    })
    .catch(error => console.error("erro:", error))
}