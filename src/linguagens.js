import React from "react";
import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
// import { Container } from './styles';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
const Linguagens = ({ navigation }) => {
  function openSection(created) {
    if (created) {
      navigation.navigate("Ingles");
    } else {
      alert("Ops, esta feature ainda não foi adicionada.");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => openSection(false)}
      >
        <View style={styles.item}>
          <Text style={styles.itemText}>Língua Portuguesa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => openSection(false)}
      >
        <View style={styles.item}>
          <Text style={styles.itemText}>Literatura</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => openSection(true)}
      >
        <View style={styles.item}>
          <Text style={styles.itemText}>Língua Estrangeira (inglês)</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => openSection(false)}
      >
        <View style={styles.item}>
          <Text style={styles.itemText}>Língua Estrangeira (espanhol)</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => openSection(false)}
      >
        <View style={styles.item}>
          <Text style={styles.itemText}>Artes</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const colour = [
  "#505bda",
  "#f45905",
  "#1089ff",
  "#233567",
  "#c83660",
  "#ffbd39",
  "#21aa93",
  "#f7aa00",
  "#fdb44b",
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f3eb",
  },
  content: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: screenWidth - 50,
    padding: 20,
    borderRadius: 8,
    backgroundColor: colour[Math.floor(Math.random() * colour.length)],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  itemText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textTransform: "uppercase",
  },
});
export default Linguagens;
