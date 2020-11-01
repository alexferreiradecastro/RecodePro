<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Nossas Lojas - Full Stack Eletro</title>
    <link rel="stylesheet" href="./css/estilo.css">
</head>

<body>
    <!-- menu -->
    <?php
        include_once('menu.html');
    ?>

    <!-- Inicío dos endereços -->
    <h2>Nossas Lojas</h2>
    <hr>
    <table border=0 width="100%" cellpadding="20">
        <tr>
            <td width="33%">
                <h3>Rio de Janeiro</h3>
                <p>Avenida Presidente Vargas, 5000</p>
                <p>10 &ordm; andar</p>
                <p>Centro</p>
                <p>(21) 3333-3333</p>
            </td>
            <td width="33%">
                <h3>São Paulo</h3>
                <p>Avenidade Paulista, 985</p>
                <p>3 &ordm; andar</p>
                <p>Jardins</p>
                <p>(11) 4444-4444</p>
            </td>
            <td width="33%">
                <h3>Santa Catarina</h3>
                <p>Rua Major Ávila, 370</p>
                <p>2 &ordm; andar</p>
                <p>Vila Mariana</p>
                <p>(47) 5555-5555</p>
            </td>
        </tr>
    </table>
    <!-- Fim dos endereços -->
    </br></br></br></br>

    <!-- início forma de pagamento -->
    <footer id="rodape">
        <p id="formas_pagamento"><b>Formas de Pagamento</b></p>
        <img width="378" height="55" src="./imagens/formasPagamento.png" alt="Formas de pagamento">
        <p>&copy; Recode Pro</p>
    </footer>
    <!-- Fim forma de pagamento -->
</body>

</html>