import React from 'react';
import {Table, Form, Button, Container} from 'react-bootstrap';


export default function Contatos(props) {
    return (


      <Container>

          <Table >
              <thead>
                <div align="center">
                  <tr>                      
                    <td><img src="./img/email.png" width="12%"/>
                      <p >contato@fullstackeletro.com</p>
                    </td>

                      <td><img src="./img/telefoneWhatsapp.png" width="12%"/>
                      <p>(11) 99999-9999</p></td>
                      
                    </tr>
                  </div>
              </thead>
          </Table>

      <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Nome:</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" />
          </Form.Group>
          
          <Form.Group controlId="exampleForm.ControlSelect2">
            

          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensagem:</Form.Label>
            <Form.Control as="textarea"  placeholder="Digite sua mensagem"rows={3} />
          </Form.Group>
          <Button>
            Enviar
          </Button>
      </Form>
        
</Container>
    )
}