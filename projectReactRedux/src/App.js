import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import Menu from './components/menu'




function App() {
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  // Redux
  const frutas = useSelector((state) => state.frutasReducer.frutas);
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);

  const dispatch = useDispatch();

  function adicionarFruta(event) {
    event.preventDefault();

    const objFruta = {
      nome: inputFrutas
    }

    dispatch( {type: "ADICIONAR", value: objFruta});
  }

  function alterarTitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});  
  }

  return (
    <div class="container border p-4  bg-success text-white mt-5 rounded" >
  

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Menu />

      <form>
        <label>Registre sua lista aqui</label>
        <input class="ml-2" class="form-control" aria-label="Sizing example input"
        placeholder="Digite um título" 
        value={inputTitulo}
        onChange={alterarTitulo}
        />
      </form>


      <h1>{stateTitulo}</h1>

      <form onSubmit={adicionarFruta}>

        <input class="form-control" aria-label="Sizing example input"
        placeholder="Digite os itens"
        value={inputFrutas}
        onChange={(event) => setInputFrutas(event.target.value)}
        />

        <button class="btn btn-primary btn-sm mt-1 " >
          Enviar
        </button>

      </form>
      {
        frutas.map((fruta, index) => {
          return (
            <li key={index}>{fruta.nome}</li>
          )
        })
      }
    </div>
    </div>
  );
}

export default App;
