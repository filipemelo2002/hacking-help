import React, { useEffect } from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "./login";
import Home from "./home";
import Cadastro from "./cadastro";
import Linguagens from "./linguagens";
import Ingles from "./ingles";
import Content from "./content";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="Login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            title: "Seja Bem-Vindo(a)",
            headerStyle: {
              backgroundColor: "#3199be",
            },
            headerLeft: null,
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          component={Cadastro}
          name="Cadastro"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          component={Linguagens}
          name="Linguagens"
          options={{
            title: "Linguagens e suas Tecnologias",
            headerStyle: {
              backgroundColor: "#3199be",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          component={Ingles}
          name="Ingles"
          options={{
            title: "Língua Estrangeira (Inglês)",
            headerStyle: {
              backgroundColor: "#3199be",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          component={Content}
          name="Content"
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#3199be",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
