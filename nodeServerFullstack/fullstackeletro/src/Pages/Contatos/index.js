//import React from 'react';
import { Table, Form, Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react'

export default function Contatos(props) {
  const [comentario, setComentario] = useState([]);
  const [render, setRender] = useState(false);
  useEffect(async () => {
    const url = "http://localhost:3333/contato";
    const response = await fetch(url);
    setComentario(await response.json());
    console.log(comentario);

  }, [render])



  async function registrarComentario(event) {

    event.preventDefault();

    let formData = new FormData(event.target);

    // console.log(formData.get("nome"));
    // console.log(formData.get("mensagem"));

    var obj = { nome: formData.get("nome"), mensagem: formData.get("mensagem") };
    console.log(obj);

    var obj2 = JSON.stringify(obj);
    // console.log(obj2);

    const url = "http://localhost:3333/contato";
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'Application/json'
      },
      body: obj2
    }).then((response) => setRender(response)
    )
  }


  return (

    <Container>

      <Table  >
        <thead>
          <div align="center">
            <tr>
              <td><img src="./img/email.png" width="12%" />
                <p >contato@fullstackeletro.com</p>
              </td>

              <td><img src="./img/telefoneWhatsapp.png" width="12%" />
                <p>(11) 99999-9999</p></td>

            </tr>
          </div>
        </thead>
      </Table>

      <Form onSubmit={registrarComentario}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Nome:</Form.Label>
          <Form.Control name="nome" type="text" placeholder="Digite seu nome" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">

        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensagem:</Form.Label>
          <Form.Control name="mensagem" as="textarea" placeholder="Digite sua mensagem" rows={3} />
        </Form.Group>
        <Button type="submit" >
          Enviar
          </Button>
      </Form>

      {comentario.map((elemento) => {
        return (

          <div>
            {elemento.nome} : {elemento.mensagem}
            <hr />
          </div>
        )
      })}


    </Container>
  )
}