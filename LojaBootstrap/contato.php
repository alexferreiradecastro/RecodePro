<?php
$servername = "localhost";
$username = "root";
$password = "";
$databese = "fseletro";

$conn = mysqli_connect($servername, $username, $password, $databese);

if (!$conn) {
    die("A conexão com o banco de dados falhou" . mysqli_connect());
}

if (isset($_POST['nome']) && isset($_POST['msg'])) {
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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>

    <!-- menu -->
    <?php
    include_once('./incloude/menu.php');
    ?>

    <main>
        <div class="container-fluid bg-light text-dark" >
            <header>
                <h2> Contatos</h2>
            </header>
            <hr>
        </div>
        <table width="100%" cellpading="20">
            <td width="50%" align="center"><img src="./imagens/email.png" width="10%">
                <p>contato@fullstackeletro.com</p>

            <td width="50%" align="center">
                <p>(11) 99999-9999</p>
                <img src="./imagens/telefoneWhatsapp.png" width="10%">
       </table>

        <!-- Inicío Mensagem do usuário -->

        <form class="form-group" method="POST" action="" id="form">
            <h4>Nome: </h4>
            <input type="text" name="nome" size="48" maxlength="60" placeholder="Digite seu nome">
            <br /><br />
            <h4>Mensagem: </h4>
            <textarea type="text" name="msg" cols="50" rows="8" placeholder="Escreva sua mensagem"></textarea> </br>
            <input type="submit" nome="submit" value="Enviar" id="botao">
        </form>

        <?php

        $sql = "select * from comentarios";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "Data: ", $row['data'], "<br/>";
                echo "Nome: ", $row['nome'], "<br/>";
                echo "Mensagem: ", $row['msg'], "<br/>";
                echo "<hr/>";
            }
        } else {
            echo "Nenhum comentário foi digitado";
        }

        ?>

        <!-- Fim Mensagem do usuário -->
    </main>

    <!-- forma de pagamento -->
    <?php
    include_once('./incloude/footer.php');
    ?>

</body>

</html>