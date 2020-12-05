<?php

include_once('./ClasseConexao.php');

class Produto
{
    public $idproduto;
    public $categoria;
    public $descricao;
    public $imagem;
    public $preco;
    public $precovenda;

    public static function getAll()
    {
        $connection = Connection::conectaDb();

        $stmt = $connection->query("SELECT * FROM produtos"); 
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}