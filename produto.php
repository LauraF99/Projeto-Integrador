<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "craftland";

$conn =  mysqli_connect($servername, $username, $password, $dbname);

if($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nomeProduto = $_REQUEST['nomeProduto'];
$categoria = $_REQUEST['categoria'];
$tamanho = $_REQUEST['tamanho'];
$valorProduto = $_REQUEST['valorProduto'];


$sql = "INSERT INTO produtos (nome_produto, categoria, tamanho, valor_produto)
VALUES ('$nomeProduto', '$categoria', '$tamanho', '$valorProduto')";

if ($conn->query($sql) === TRUE) {
    //essa parte seria para puxar o id por auto incremente no banco de dados e adicionar zeros a esquerda. Não esta funcionando
    // $id_produto = $conn->insert_id;
    // $id_produto_formatado = str_pad($id, 3, '0', STR_PAD_LEFT);
    echo "Novo registro criado com sucesso";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

header("Location: produtoComPhp.html", true, 301); 
$conn->close();
?>
