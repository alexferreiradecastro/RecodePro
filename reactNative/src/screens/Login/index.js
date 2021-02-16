import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert, } from 'react-native';

import Fundo from '../../../assets/fundo.jpg';
import styles from './styles';

const apiUsuario = {
    id: 1,
    email: "",
    senha: ""
}

function Login({ navigation }) {

    function pageHome() {
        navigation.navigate("Home")
    }

    function autenticacao() {

        if (apiUsuario.email === usuario && apiUsuario.senha === senha) {
            navigation.navigate("Lista");
        } else {
            Alert.alert("Usuário inválido", "Esse Usuário não foi cadastrado!")
        }
    }


    const [usuario, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");



    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>

                <TouchableOpacity style={styles.btn2} onPress={pageHome}  >
                    <Text style={styles.texto}>
                        Home
                    </Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput placeholder="Digite seu email"
                        style={styles.input}
                        value={usuario}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <TextInput placeholder="Digite sua senha"
                        style={styles.input}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                        secureTextEntry={true}
                    />



                    <TouchableOpacity style={styles.btn} onPress={autenticacao} >
                        <Text style={styles.texto}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </View>
    )
}

export default Login;