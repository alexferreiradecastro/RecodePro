import './Produto.css';
// import {Card, Button} from 'react-bootstrap';

export default function Produto(props) {


    // function show_info(event){
    //     const target = event.currentTarget;
    //     const elemento = target.getElementsByTagName("figura")[0];
    //     elemento.style.visibility = "initial";
    // }

    // function hide_info(event){
    //     const target = event.currentTarget;
    //     const elemento = target.getElementsByTagName("figura")[0];
    //     elemento.style.visibility = "hidden";
    // }

    // onMouseOver={show_info} onMouseOut={hide_info}


    return (

        <figure className={props.categoria + "produto col-lg-3 col=md-4 col-sm-6 col-xs-12 mr-auto"}  >
            <img src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos" /> 
            <div className="figura" >        {/*Retorna o objeto da img. O default libera a imagem */}
                <p className="nome-prod">
                    {props.descricao}
                </p>
                <p className="preco-prod">
                    R$ {props.preco}
                </p>
                <p className="precofinal-prod">
                    R$ {props.precovenda}
                </p>
            </div>
        </figure>

    );
}