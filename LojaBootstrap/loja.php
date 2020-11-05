<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>Nossas Lojas - Full Stack Eletro</title>
    <link rel="stylesheet" href="./css/estilo.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>

<body>
    <!-- menu -->
    <?php
    include_once('./incloude/menu.php');
    ?>

    <!-- Inicío dos endereços -->
    <div class="container-fluid bg-light text-dark">
        <header>
            <h2> Nossas Lojas</h2>
        </header>
        <hr>
    </div>

    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h3>Rio de Janeiro</h3>
                <p>Avenida Presidente Vargas, 5000</p>
                <p>10 &ordm; andar</p>
                <p>Centro</p>
                <p>(21) 3333-3333</p>
            </div>

            <div class="col">
                <h3>São Paulo</h3>
                <p>Avenidade Paulista, 985</p>
                <p>3 &ordm; andar</p>
                <p>Jardins</p>
                <p>(11) 4444-4444</p>
            </div>

            <div class="col">
                <h3>Santa Catarina</h3>
                <p>Rua Major Ávila, 370</p>
                <p>2 &ordm; andar</p>
                <p>Vila Mariana</p>
                <p>(47) 5555-5555</p>
            </div>
        </div>
    </div>
    

    <!-- forma de pagamento -->
    <?php
    include_once('./incloude/footer.php');
    ?>

</body>

</html>