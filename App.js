import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Header from "./Components/Header";
import CurrentWeather from "./Components/CurrentWeather";

export default function App() {
  // console.log(weather)

  //   console.log(
  //     weather.sys.country,
  //     weather.name,
  //     weather.main.temp,
  //     weather.wind.speed,
  //     weather.weather[0].description,
  //     weather.sys.sunrise,
  //     weather.sys.sunset
  //   );

  return (
    <View style={styles.container}>
      <Header />
      <CurrentWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
