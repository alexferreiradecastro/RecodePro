import { useState, useEffect } from 'react';
import Produto from './Produto/Produto';
import { Container, Row } from 'react-bootstrap';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => { // obter a api de forma assincrona. No entando haverá espera em sequência, quando necessário
        const resposta = await fetch("http://localhost:3333/produtos");
        const produtos = await resposta.json();
        setProdutos(produtos);
        

    }, []);

    return (
        <Container>
            <Row>
                {produtos && produtos.map(item => <Produto key={item.idproduto} categoria={item.categoria} descricao={item.descricao} imagem={item.imagem} preco={item.preco} precovenda={item.precovenda}  />)}

            </Row>
        </Container>
    )
}