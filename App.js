import * as React from "react";
//import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CurrentWeather from "./Components/CurrentWeather";
import About from "./Components/About";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Current Weather">
        <Stack.Screen name="Current Weather" component={CurrentWeather} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

