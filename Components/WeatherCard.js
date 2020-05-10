import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const {
  dateFormatter,
  kelvinToCelsius
} = require("../utility-functions/utilityFunctions");

const WeatherCard = props => {
  const { weather } = props;
  return (
    <View style={styles.info}>
      <View>
        <Text style={styles.cityName}>
          {weather.name}({weather.sys.country})
        </Text>
      </View>
      <View style={styles.icon}>
        <Image
          style={{ width: 90, height: 90 }}
          source={{
            uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}%402x.png`
          }}
        />
      </View>
      <View>
        <Text style={styles.description}>{weather.weather[0].description}</Text>
      </View>
      <View>
        <Text style={styles.temp}>{kelvinToCelsius(weather.main.temp)} C</Text>
      </View>
      <View>
        <Text style={styles.sunrise}>
          {" "}
          Sunrise: {dateFormatter(weather.sys.sunrise)}{" "}
        </Text>
      </View>
      <View>
        <Text style={styles.sunset}>
          SunSet: {dateFormatter(weather.sys.sunset)}
        </Text>
      </View>
      <View>
        <Text style={styles.wind}>Wind Speed => {weather.wind.speed}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    flex: 1,
    padding: 10,
    margin: 10,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  cityName: {
    fontSize: 42,
    fontWeight: "bold",
    marginTop: -20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },
  description: {
    marginTop: -40,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1
  },
  icon: {
    marginTop: -40
  },
  temp: {
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  },
  sunrise: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFD700",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  sunset: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF8C00",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  wind: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default WeatherCard;
