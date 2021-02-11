import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import PageProdutos from './Pages/Produtos';
import Lojas from './Pages/Lojas';
import Contatos from './Pages/Contatos';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/produtos" component={PageProdutos} />
            <Route exact path="/loja" component={Lojas} />
            <Route exact path="/contato" component={Contatos} />
         </Switch>
    );
}

export default Routes;