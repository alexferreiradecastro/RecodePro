export default function Lojas(props) {
    return (
        <div>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Cidade</th>
                        <th scope="col">Rio de Janeiro - RJ</th>
                        <th scope="col">São Paulo - SP</th>
                        <th scope="col">Florianópolis - SC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Logradouro</th>
                        <td>Avenida Brasil, 500 - Centro 10 &ordm; andar</td>
                        <td>Avenida Paulista, 985 - Centro 3 &ordm; andar </td>
                        <td>Rua Major Ávila, 370 2 &ordm; andar</td>
                    </tr>
                    <tr>
                        <th scope="row">Bairro</th>
                        <td>Centro</td>
                        <td>Bela Vista</td>
                        <td>Vila Mariana</td>
                    </tr>
                    <tr>
                        <th scope="row">Telefone</th>
                        <td>(21) 3333-3333</td>
                        <td>(11) 4444-4444</td>
                        <td>(47) 5555-5555</td>
                    </tr>
                </tbody>
            </table>
            {/* <div class="container-fluid ">
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
        </div>     */}
        </div>
    )
}