import React, { useEffect } from "react";

import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
const Cadastro = ({ navigation }) => {
  function signUp() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Faça seu Cadastro</Text>
        <TextInput placeholder="Número de Matrícula" style={styles.input} />
        <TextInput placeholder="E-Mail" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={signUp}>
          <Text style={styles.textSecondary}>Já possui um login?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f3eb",
  },
  content: {
    padding: 30,
    borderRadius: 8,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    color: "#3d3d3d",
    fontSize: 25,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    width: screenWidth - 100,
    borderRadius: 8,
    height: 50,
    backgroundColor: "#ececec",
    marginTop: 8,
  },
  button: {
    borderRadius: 8,
    marginTop: 8,
    width: screenWidth - 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fc7e2f",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  textSecondary: {
    marginTop: 18,
    textDecorationLine: "underline",
    color: "#3d3d3d",
    fontSize: 15,
  },
});

export default Cadastro;
