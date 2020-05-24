import React, { useEffect } from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "./login";
import Home from "./home";
import Cadastro from "./cadastro";

import firebase from "firebase";
import firebaseConfig from "./config";

const Stack = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);
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
              backgroundColor: "#fc7e2f",
            },
            headerLeft: null,
            headerTintColor: "#fff",
            headerTitleStyle: {},
          }}
        />
        <Stack.Screen
          component={Cadastro}
          name="Cadastro"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
