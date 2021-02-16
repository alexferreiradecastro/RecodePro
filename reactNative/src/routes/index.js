import { React } from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Lista from '../screens/Lista';
import Home from '../screens/Home';

const Rotas = {

    Home: {
        nome: "Home",
        screen: Home
    },
    Login: {
        nome: "Login",
        screen: Login
    },
    Lista: {
        nome: "Lista",
        screen: Lista
    }
}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);