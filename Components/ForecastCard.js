import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground
} from "react-native";
const { kelvinToCelsius } = require("../utility-functions/utilityFunctions");

const ForecastCard = ({ forecast }) => {
  return (
    <View>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.forecast}>
          <Text style={styles.subHeader}>3 hour forecast</Text>
          <View style={styles.forecastData}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {forecast.map((hours, index) => (
                <View style={styles.data} key={index}>
                  <ImageBackground
                    style={{ width: 180, height: 80 }}
                    source={{
                      uri: `http://openweathermap.org/img/wn/${hours.weather[0].icon}%402x.png`
                    }}
                  >
                    <View style={styles.info}>
                      <Text>{hours.dt_txt.slice(10, -3)}</Text>
                      <Text>wind:{hours.wind.speed}</Text>
                      <Text>{hours.weather[0].main}</Text>
                      <Text>{kelvinToCelsius(hours.main.temp)}c</Text>
                    </View>
                  </ImageBackground>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    color: "white",
    fontSize: 17,
    alignItems: "center"
  },
  forecast: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 10
  },
  forecastCard: {
    height: 100,
    marginTop: 10,
    padding: 5
  },
  forecastData: {
    height: 90,
    marginTop: 9
  },
  data: {
    width: 200,
    padding: 10,
    margin: 0.5,
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "yellow",
    justifyContent: "space-between",
    borderRadius: 10
  },
  info: {
    alignItems: "flex-start",
  }
});

export default ForecastCard;
