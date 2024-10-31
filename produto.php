<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "craftland";

$conn =  mysqli($servername, $username, $password, $dbname)

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

$nome_produto = $_REQUEST['nome_produto']
$categoria = $_REQUEST['categoria']
$tamanho = $_REQUEST['tamanho']
$valor_produto = $_REQUEST['valor_produto']

$sql = "INSERT INTO produto (nome_produto, categoria, tamanho, valor_produto)
VALUES ('$nome_produto', '$categoria', '$tamanho', '$valor_produto')";

if ($conn->query($sql) === TRUE) {
    echo "Novo registro criado com sucesso";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

header("Location: index.php", true, 301); 
$conn->close();
?>