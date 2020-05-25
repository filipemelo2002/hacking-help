import React from "react";
import { Dimensions } from "react-native";
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
const screenWidth = Math.round(Dimensions.get("window").width);
// import { Container } from './styles';
import illustration from "./assets/illustration.png";
import illustration1 from "./assets/illustration1.png";
import illustration2 from "./assets/illustration2.png";
import illustration3 from "./assets/illustration3.png";
import illustration4 from "./assets/illustration4.png";
const Home = ({ navigation }) => {
  function openSection(created) {
    if (created) {
      navigation.navigate("Linguagens");
    } else {
      alert("Ops, esta feature ainda não foi adicionada.");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => openSection(true)}
            style={styles.content}
          >
            <Image source={illustration1} style={styles.img} />
            <Text style={styles.title}>Linguagens e suas tecnologias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openSection(false)}
            style={styles.content}
          >
            <Image source={illustration2} style={styles.img} />
            <Text style={styles.title}>Matemática e suas tecnologias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openSection(false)}
            style={styles.content}
          >
            <Image source={illustration3} style={styles.img} />
            <Text style={styles.title}>
              Ciência da Natureza e suas Tecnologias
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openSection(false)}
            style={styles.content}
          >
            <Image source={illustration} style={styles.img} />
            <Text style={styles.title}>
              Ciências Humanas e suas tecnologias
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openSection(false)}
            style={styles.content}
          >
            <Image source={illustration4} style={styles.img} />
            <Text style={styles.title}>Redação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: 10,
    maxHeight: 300,
    padding: 30,
    alignSelf: "center",
    width: screenWidth - 30,
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
  img: {
    resizeMode: "contain",
    width: screenWidth - 150,
    height: 150,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    color: "#3d3d3d",
    fontSize: 20,
    marginTop: 10,
  },
});

export default Home;
