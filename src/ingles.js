import React, { useState } from "react";
import { Dimensions } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
// import { Container } from './styles';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Linking,
} from "react-native";

const Ingles = ({ navigation }) => {
  const courses = [
    {
      title: "Curso de Inglês Busuu",
      link:
        "https://www.busuu.com/pt/course/aprenda-ingles-online?utm_medium=cpc&utm_source=google&utm_campaign=BR_PT_Web_DSA&utm_group=BR_PT_Web_DSA_English&utm_term=DYNAMIC+SEARCH+ADS&gclid=EAIaIQobChMI_smo44PN6QIVBKSzCh1mPAtLEAAYAyAAEgLqYfD_BwE&gclsrc=aw.ds",
    },
    {
      title: "Curso de Inglês Prime Cursos",
      link:
        "https://www.primecursos.com.br/ingles-basico/?gclid=EAIaIQobChMI_smo44PN6QIVBKSzCh1mPAtLEAAYBCAAEgIZOfD_BwE",
    },
    {
      title: "Curso de Inglês Universidade da Califórnia",
      link:
        "https://info.ce.uci.edu/latinpromo-ESL-Programs.html?ls=GoogleSearch&utm_campaign=english-language-programs-latin-am&utm_source=Google&utm_medium=PaidSearch&creative=435226663185&keyword=idioma%20ingl%C3%AAs%20cursos&matchtype=b&network=g&device=c&gclid=EAIaIQobChMI_smo44PN6QIVBKSzCh1mPAtLEAAYASAAEgI6s_D_BwE",
    },
    {
      title: "Curso de Inglês Social English Language",
      link:
        "https://alison.com/pt-BR/claro/social-english-language-skills-revisado",
    },
  ];
  const [datas, setDatas] = useState(courses);
  async function openLink(link) {
    navigation.navigate("Content", { uri: link });
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        data={datas}
        keyExtractor={(item) => item.link}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.content}
            onPress={() => openLink(item.link)}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
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
    width: screenWidth - 50,
    alignSelf: "stretch",
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
    fontSize: 15,
    textTransform: "uppercase",
  },
});
export default Ingles;
