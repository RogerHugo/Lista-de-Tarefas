<?php
class Tarefa{
    private $tarefas = [];
    private $conn;

    public function __construct($conn)
    {
        $this->conn = $conn;
    }

    public function getAllTarefas()
    {
        $sql = "select * from tarefa";
        $query = mysqli_query($this->conn, $sql);

        while($line = mysqli_fetch_assoc($query))
        {
            //Adiciona cada registo de tarefa na lista das tarefas
            $this->tarefas[] = array('id' => $line['id'], 'titulo' => $line['titulo'], 'conteudo' => $line['conteudo'], 'data_criacao' => $line['data_criacao'], 'data_ultima_modificacao' => $line['data_ultima_modificacao']);
        }

        return $this->tarefas;
    }

    public function getTarefa($id)
    {
        $sql = "select * from tarefa where id = '$id' limit 1";
        $query = mysqli_query($this->conn, $sql);
        

        if($query)
        {
            $line = mysqli_fetch_assoc($query);
            return array('id' => $line['id'], 'titulo' => $line['titulo'], 'conteudo' => $line['conteudo'], 'data_criacao' => $line['data_criacao'], 'data_ultima_modificacao' => $line['data_ultima_modificacao']);
        }
        else
        {
            return array('status' => 'error');
        }
    }

    public function criarTarefa($titulo, $conteudo)
    {
        $data_criacao = date("y/m/d");
        $data_ultima_modificacao = $data_criacao;
        $sql = "insert into tarefa(titulo, conteudo, data_criacao, data_ultima_modificacao) values('$titulo', '$conteudo', '$data_criacao', '$data_ultima_modificacao')";

        return $this->enviaQuery($sql);
    }
    
    public function editarTarefa($id, $titulo, $conteudo)
    {
        $data_ultima_modificacao = date("y/m/d");
        $sql = "update tarefa set titulo = '$titulo', conteudo = '$conteudo', data_ultima_modificacao = '$data_ultima_modificacao' where id = '$id' limit 1"; 

        return $this->enviaQuery($sql);
    }

    public function excluirTarefa($id)
    {
        $sql = "delete from tarefa where id = '$id' limit 1";

        return $this->enviaQuery($sql);
    }

    //Faz a requisição segundo o comando sql recebido como parâmetro e retorna o status
    private function enviaQuery($sql)
    {
        $query = mysqli_query($this->conn, $sql);

        if($query){
            return "sucess";
        }else{
            return "error";
        }
    }
}