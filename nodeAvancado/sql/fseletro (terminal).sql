--Create database

CREATE DATABASE fseletro;


CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `categorias` (`id`, `categoria`) VALUES
(1, 'geladeira'),
(2, 'fogao'),
(3, 'microondas'),
(4, 'lava-louca'),
(5, 'lavadoura');


CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `mensagem` varchar(320) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `comentarios` (`id`, `nome`, `mensagem`, `data`) VALUES
(1, 'Alex', 'Primeira mensagem', '2020-10-30 23:01:45'),
(16, 'Recode', 'RecodePro', '2021-02-02 15:48:27'),
(20, 'Client', 'Congratulations', '2021-02-02 15:53:55'),
(30, '2', '888', '2021-02-02 20:45:12');


CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` int(11) NOT NULL,
  `descricao` varchar(140) NOT NULL,
  `imagem` varchar(250) DEFAULT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precovenda` decimal(8,2) DEFAULT NULL,
   PRIMARY KEY (`idproduto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `produtos` (`idproduto`, `categoria`, `descricao`, `imagem`, `preco`, `precovenda`) VALUES
(1, 1, 'Refrigerador Brastemp Inverse Inox 540L', 'geladeira01.png', '6380.00', '5019.00'),
(2, 1, 'Refrigerador Frost Free Brastemp 375 Litros', 'geladeira02.png', '2068.00', '1910.00'),
(3, 1, 'Refrigerador Frost Free Consul Prata 340L', 'geladeira03.png', '2069.00', '1969.00'),
(4, 2, 'Fogão 4 Bocas Consul Inox 220v Acendimento Automático', 'fogao01.png', '1200.00', '1129.00'),
(5, 2, 'Fogão 4 Bocas Atlas Monaco com Acendimento Automático', 'fogao02.png', '1200.00', '1129.00'),
(6, 3, 'Microondas Consul 32L Inox CMS45 ARANA 220V', 'microondas01.png', '580.00', '509.00'),
(7, 3, 'Microondas Philco 32L Espelhado 220V', 'microondas02.png', '508.00', '464.00'),
(8, 3, 'Microondas Electrolux 20L Branco 220V', 'microondas03.png', '459.00', '436.00'),
(9, 4, 'Lava-Louça Electrolux Inox 10 Serviços', 'lavalouca01.png', '3599.00', '2799.00'),
(10, 4, 'Lava-Louça Brastemp 8 Serviços Branca', 'lavalouca02.png', '1970.00', '1730.00'),
(11, 5, 'Lavadora Roupas Brastemp 11kg Branca', 'lavadora01.png', '1699.00', '1214.00'),
(12, 5, 'Lavadora de Roupas Philco Inverter 12Kg', 'lavadora02.png', '459.00', '436.00');


ALTER TABLE `produtos`
  ADD CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`categoria`) REFERENCES `categorias` (`id`);



