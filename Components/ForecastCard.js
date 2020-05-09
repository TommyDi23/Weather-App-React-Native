import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
const { kelvinToCelsius } = require("../utility-functions/utilityFunctions");

const ForecastCard = ({ forecast }) => {
  return (
    <View>
      <ScrollView scrollEventThrottle={16}>
        <View style={styles.forecast}>
          <Text>3 hours forecast</Text>
          <View style={styles.forecastData}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {forecast.map((hours, index) => (
                <View style={styles.data} key={index}>
                  <Text>{hours.dt_txt}</Text>
                  <Text>wind:{hours.wind.speed}</Text>
                  <Text>{hours.weather[0].main}</Text>
                  <Text>{kelvinToCelsius(hours.main.temp)}c</Text>
                </View>
              ))}

              <View>
                <View></View>
                <View></View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/* <FlatList horizontal={true} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  forecast: {
    flex: 1,
    backgroundColor: "green",
    paddingTop: 10
  },
  forecastCard: {
    height: 130,
    marginTop: 10,
    padding: 5
  },
  forecastData: {
    height: 100,
    marginTop: 20
  },
  data: {
    padding: 10,
    margin: 0.5,
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "yellow",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10
  }
});

export default ForecastCard;
