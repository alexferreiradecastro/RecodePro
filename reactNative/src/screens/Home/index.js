import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';




export default function Home({ navigation }) {

  function pageLogin() {
    navigation.navigate("Login")
  }
  return (

    <View style={styles.div}>

      <Text style={styles.text}>
        Seja bem vindo(a)!
      </Text>

      <Text style={styles.text2}>
        <p>Aqui em nossa loja, <em>programadores tem desconto</em> nos produtos para sua casa!</p>
      </Text>

      <TouchableOpacity style={styles.btn} onPress={pageLogin}  >
        <Text style={styles.texto}>
          Fazer login
        </Text>
      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  div: {
    height: "100%",
    backgroundColor: '#47B071',
    justifyContent: 'center',
    alignItems: 'center'

  },
  text: {
    color: 'white',
    fontSize: 30
  },
  text2: {
    color: 'white',
    fontSize: 20
  },

  btn: {
    width: "26%",
    backgroundColor: 'white',
    marginTop: 12,
    padding: 8,
    borderRadius: 4
  },
  texto: {
    fontSize: 12,
    color: '#47B071',
    textAlign: 'center'
  }

});