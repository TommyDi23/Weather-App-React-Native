import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Header from "./Components/Header";
import CurrentWeather from "./Components/CurrentWeather";

export default function App() {
  const backgroundImage = {
    uri:
      "https://webcomicms.net/sites/default/files/clipart/147582/cartoon-cloud-png-147582-6921620.png"
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        resizeMode="cover"
      >
        <Header />
        <CurrentWeather />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  keyboard: {
    flex: 1
  }
});
