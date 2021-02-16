import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {

  function pageHome() {
    navigation.navigate("Home")
  }

  const data = [

    {
      "idproduto": 1,
      "categoria": "geladeira",
      "descricao": "Refrigerador Brastemp Inverse Inox 540L",
      "imagem": "geladeira01.png",
      "preco": 6380,
      "precovenda": 5.019,
      "id": 1
    },
    {
      "idproduto": 2,
      "categoria": "geladeira",
      "descricao": "Refrigerador Frost Free Brastemp 375 Litros",
      "imagem": "geladeira02.png",
      "preco": 2068,
      "precovenda": 1.910,
      "id": 1
    },
    {
      "idproduto": 3,
      "categoria": "geladeira",
      "descricao": "Refrigerador Frost Free Consul Prata 340L",
      "imagem": "geladeira03.png",
      "preco": 2069,
      "precovenda": 1.969,
      "id": 1
    },
    {
      "idproduto": 4,
      "categoria": "fogao",
      "descricao": "Fogão 4 Bocas Consul Inox 220v Acendimento Automático",
      "imagem": "fogao01.png",
      "preco": 1200,
      "precovenda": 1.129,
      "id": 2
    },
    {
      "idproduto": 5,
      "categoria": "fogao",
      "descricao": "Fogão 4 Bocas Atlas Monaco com Acendimento Automático",
      "imagem": "fogao02.png",
      "preco": 1200,
      "precovenda": 1.129,
      "id": 2
    },
    {
      "idproduto": 6,
      "categoria": "microondas",
      "descricao": "Microondas Consul 32L Inox CMS45 ARANA 220V",
      "imagem": "microondas01.png",
      "preco": 580,
      "precovenda": 509,
      "id": 3
    },
    {
      "idproduto": 7,
      "categoria": "microondas",
      "descricao": "Microondas Philco 32L Espelhado 220V",
      "imagem": "microondas02.png",
      "preco": 508,
      "precovenda": 464,
      "id": 3
    },

    {
      "idproduto": 8,
      "categoria": "microondas",
      "descricao": "Microondas Electrolux 20L Branco 220V",
      "imagem": "microondas03.png",
      "preco": 459,
      "precovenda": 436,
      "id": 3
    },
    {
      "idproduto": 9,
      "categoria": "lava-louca",
      "descricao": "Lava-Louça Electrolux Inox 10 Serviços",
      "imagem": "lavalouca01.png",
      "preco": 3599,
      "precovenda": 2.799,
      "id": 4
    },
    {
      "idproduto": 10,
      "categoria": "lava-louca",
      "descricao": "Lava-Louça Brastemp 8 Serviços Branca",
      "imagem": "lavalouca02.png",
      "preco": 1970,
      "precovenda": 1.730,
      "id": 4
    },
    {
      "idproduto": 11,
      "categoria": "lavadoura",
      "descricao": "Lavadora Roupas Brastemp 11kg Branca",
      "imagem": "lavadora01.png",
      "preco": 1.699,
      "precovenda": 1.214,
      "id": 5
    },
    {
      "idproduto": 12,
      "categoria": "lavadoura",
      "descricao": "Lavadora de Roupas Philco Inverter 12Kg",
      "imagem": "lavadora02.png",
      "preco": 459,
      "precovenda": 436,
      "id": 5
    }
  ]



  console.log(data);
  return (
    <View style={styles.div}>

      <TouchableOpacity style={styles.btn2} onPress={pageHome}  >
        <Text style={styles.texto}>
          Home
        </Text>
      </TouchableOpacity>

      <View style={styles.item}>
        <Text style={styles.text}>
          Lista de Produtos
        </Text>

        {
          data.map(row => <Text style={styles.textmap} > {row.idproduto} - {row.categoria}
           ({row.descricao})   Preço de venda = {row.precovenda},00</Text>)
        }

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    padding: 50,
    marginVertical: 12,
    marginHorizontal: 12,
  },

  title: {
    fontSize: 32,
  },

  text: {
    textAlign: 'center',
    color: '#47B071',
    marginTop: 5,
    paddingLeft: 10,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    fontSize: 40,
  },

  textmap: {
    color: 'white',
    marginTop: 5,
    paddingLeft: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: '#47B071',
    fontSize: 20,
    borderRadius: 4
  },

  btn2: {
    width: "26%",
    backgroundColor: '#47B071',
    marginTop: 12,
    padding: 8,
    borderRadius: 4
  },

  texto: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center'
  },

  div: {
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center'
  }

});