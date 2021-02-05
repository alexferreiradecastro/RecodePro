import React from 'react';
import { useSelector , useDispatch } from 'react-redux';

function App() {

  const numeros = useSelector((state) => state.numerosReducer);
  const nome = useSelector((state) => state.nomesReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {numeros}
      <br/>
      {nome}
      <br/>
      <button onClick={() => dispatch({type: "ADICIONAR"})}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
