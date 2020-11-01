<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $databese = "fseletro";

    $conn = mysqli_connect($servername,$username,$password,$databese);

    if (!$conn){
        die ("A conexão com o banco de dados falhou" . mysqli_connect());
    }

    if(isset($_POST['nome']) && isset($_POST['msg'])){
        $nome = $_POST['nome'];
        $msg = $_POST['msg'];

        $sql = "insert into comentarios (nome, msg) values('$nome', '$msg')";
        $result = $conn->query($sql);
    }

?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Contato - Full Stack Eletro</title>
    <link rel="stylesheet" href="./css/estilo.css">
</head>

<body>

    <!-- menu -->
    <?php
        include_once('menu.html');
    ?>

    <main>
        <div id="contato"></div>
        <header>
            <h2> Contato</h2>
        </header>
        <hr>
        
        <table border=0 width="100%" cellpading="20">
            <td width="50%" align="center"><img src="./imagens/email.png" width="10%">
                <p>contato@fullstackeletro.com</p>

            <td width="50%" align="center">
                <p>(11) 99999-9999</p>
                <img src="./imagens/telefoneWhatsapp.png" width="10%">
        </table>

        <!-- Inicío Mensagem do usuário -->
        
        <form method="POST" action="" id="form">
            <h4>Nome: </h4>
            <input type="text" name="nome" size="48" maxlength="60" placeholder="Digite seu nome">
            <h4>Mensagem: </h4>
            <textarea type="text" name="msg" cols="50" rows="8" placeholder="Escreva sua mensagem"></textarea> </br>
            <input type="submit" nome="submit"  value="Enviar" id="botao">
        </form>

    <?php
    
        $sql ="select * from comentarios";
        $result = $conn->query($sql);

        if($result->num_rows > 0) {
            while($rows = $result->fetch_assoc()){    
                echo "Data: ", $rows['data'], "<br/>";    
                echo "Nome: ", $rows['nome'], "<br/>";  
                echo "Mensagem: ", $rows['msg'], "<br/>";  
                echo "<hr/>";
    
        }
        }else {
            echo "Nenhum comentário foi digitado";
        }
    
    ?>


        <!-- Fim Mensagem do usuário -->
    </main>

    <!-- início forma de pagamento -->
    <footer id="rodape">
        <p id="formas_pagamento"><b>Formas de Pagamento</b></p>
        <img width="378" height="55" src="./imagens/formasPagamento.png" alt="Formas de pagamento">
        <p>&copy; Recode Pro</p>
    </footer>
    <!-- Fim forma de pagamento -->

</body>

</html>