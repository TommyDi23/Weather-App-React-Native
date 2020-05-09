import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const {
  dateFormatter,
  kelvinToCelsius
} = require("../utility-functions/utilityFunctions");

const image = {
  uri: "http://openweathermap.org/img/wn/10d%402x.png"
};

const WeatherCard = props => {
  const { weather } = props;
  console.log(weather.weather[0].icon);
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
        <Text>{kelvinToCelsius(weather.main.temp)} C</Text>
      </View>
      <View>
        <Text> Sunrise:{dateFormatter(weather.sys.sunrise)}, </Text>
      </View>
      <View>
        <Text>
          SunSet:
          {dateFormatter(weather.sys.sunset)}
        </Text>
      </View>
      <View>
        <Text>Wind Speed => {weather.wind.speed}</Text>
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
    fontSize: 40
  },
  description: {
    fontSize: 20,
    alignItems: "center"
  },
  icon: {
    fontSize: 50
  }
});

export default WeatherCard;
