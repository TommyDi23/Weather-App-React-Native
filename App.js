import React from "react";
import { View, StyleSheet, Button, ImageBackground } from "react-native";
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

  const image = {
    uri:
      "https://img.resized.co/newstalk/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLnJhZGlvY21zLm5ldFxcXC91cGxvYWRzXFxcLzIwMTlcXFwvMDVcXFwvMjkxMDEyMDhcXFwvc3Vuc2hpbmUyLWUxNTU2OTY3ODk4Nzk2LmpwZ1wiLFwid2lkdGhcIjo5NzAsXCJoZWlnaHRcIjo0ODUsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5uZXdzdGFsay5jb21cXFwvaW1hZ2VzXFxcL2RlZmF1bHRfbm9faW1hZ2UucG5nXCJ9IiwiaGFzaCI6ImIyMzg1MDgzM2NjOGZkNDllZWFkN2RjYTc1YTRmNzVhODA2MWNhYmYifQ==/thursday-s-weather-good-sunny-spells-with-some-light-rain-later.jpg"
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode="cover">
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
    justifyContent: "center"
  }
});
