<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $databese = "fseletro";

    $conn = mysqli_connect($servername,$username,$password,$databese);

    if (!$conn){
        die ("A conexão com o banco de dados falhou" . mysqli_connect());
    }


?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Produtos - Full Stack Eletro</title>
    <link rel="stylesheet" href="./css/estilo.css">
    <script src="./js/funcoes.js"></script> 
</head>

<body>
    
    <!-- menu -->
    <?php
        include_once('menu.html');
    ?>

    <header>
        <h2> Produtos</h2>
    </header>
    <hr>

    <!-- Inicío das categorias -->
    <section class="categorias">
        <h3>Categorias</h3>
        <ol>
            <li onclick="exibir_todos()">Todos (12)</li>
            <li onclick="exibir_categoria('geladeira')">Geladeiras (3)</li>
            <li onclick="exibir_categoria('fogao')">Fogões (2)</li>
            <li onclick="exibir_categoria('microondas')">Microondas (3)</li>
            <li onclick="exibir_categoria('lavadoura')">Lavadora de roupas (2)</li>
            <li onclick="exibir_categoria('lava-louca')">Lava-louças (2)</li>
        </ol>
    </section>
    <!-- Fim das categorias -->

    <?php
    
    $sql ="select * from produtos";
    $result = $conn->query($sql);

    if($result->num_rows > 0) {
        while($rows = $result->fetch_assoc()){
            
    ?>


        <div class="box_produto" id="<?php echo $rows["categoria"]; ?>">
            <img src="<?php echo $rows["imagem"]; ?>" width="110" onmouseout="foraimg(this)"onmouseover="dentroimg(this)">
            </br>
            <p class=<?php echo $rows["descricao"]; ?>>Refrigerador Frost Free Brastemp Side Inverse Inox 540 Litros</p>
            <hr>
            <p class="descricao"><strike>R$ <?php echo $rows["preco"]; ?></strike></p>
            <p class="preco">R$ <?php echo $rows["precovenda"]; ?></p>
        </div>        

    <?php            
        }
    }else {
        echo "Nenhum produto cadastrado!";
    }
    
    ?>

    <!-- Inicío da Descrição e imagens dos Produtos -->

    <!-- Fim da Descrição e imagens dos Produtos -->

    <!-- início forma de pagamento -->
    <footer id="rodape">
        <p id="formas_pagamento"><b>Formas de Pagamento</b></p>
        <img width="378" height="55" src="./imagens/formasPagamento.png" alt="Formas de pagamento">
        <p>&copy; Recode Pro</p>
    </footer>
    <!-- Fim forma de pagamento -->

</body>

</html>