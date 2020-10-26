-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Out-2020 às 16:39
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fseletro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `descricao` varchar(140) NOT NULL,
  `imagem` varchar(250) DEFAULT NULL,
  `preco` decimal(8,2) DEFAULT NULL,
  `precovenda` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idproduto`, `categoria`, `descricao`, `imagem`, `preco`, `precovenda`) VALUES
(1, 'geladeira', 'Refrigerador Frost Free Brastemp Side Inverse Inox 540 Litros', 'imagens/geladeira01.png', '6380.00', '5019.00'),
(2, 'geladeira', 'Refrigerador Frost Free Brastemp 375 Litros', 'imagens/geladeira02.png', '2068.00', '1910.00'),
(3, 'geladeira', 'Refrigerador Frost Free Consul Prata 340 litros', 'imagens/geladeira03.png', '2069.00', '1969.00'),
(4, 'fogao', 'Fogão 4 Bocas Consul Inox 220v Acendimento Automático', 'imagens/fogao01.png', '1200.00', '1129.00'),
(5, 'fogao', 'Fogão 4 Bocas Atlas Monaco com Acendimento Automático', 'imagens/fogao02.png', '1200.00', '1129.00'),
(6, 'microondas', 'Microondas Consul 32L Inox CMS45 ARANA 220V', 'imagens/microondas01.png', '580.00', '509.00'),
(7, 'microondas', 'Microondas Philco 32L Espelhado 220V', 'imagens/microondas02.png', '508.00', '464.00'),
(8, 'microondas', 'Microondas Electrolux 20L Branco 220V', 'imagens/microondas03.png', '459.00', '436.00'),
(9, 'lava-louca', 'Lava-Louça Electrolux Inox com 10 Serviços e Painel Blue Touch', 'imagens/lavalouca01.png', '3599.00', '2799.00'),
(10, 'lava-louca', 'Lava-Louça Brastemp Compacta 8 Serviços 127V Branca', 'imagens/lavalouca02.png', '1970.00', '1730.00'),
(11, 'lavadoura', 'Lavadora de Roupas Brastemp 11 kg com Turbo Performace Branca', 'imagens/lavadora01.png', '1699.00', '1214.00'),
(12, 'lavadoura', 'Lavadora de Roupas Philco Inverter 12Kg', 'imagens/lavadora02.png', '459.00', '436.00');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`idproduto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `idproduto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
