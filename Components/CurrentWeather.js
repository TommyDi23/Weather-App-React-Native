import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import * as api from "../api";
import SearchBar from "./SearchBar";

const CurrentWeather = () => {
  const [weather, setGetWeather] = useState({ report: [] });
  const [city, setCity] = useState("manchester");
  const [loading, isLoading] = useState(true);

  const handleSearchedCity = searchedCity => {
    setCity(searchedCity);
  };

  useEffect(() => {
    api.fetchWeather(city).then(data => {
      setGetWeather({ report: data });
      isLoading(false);
    });
  }, [city]);

  console.log(weather);

  if (loading)
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );
  else
    return (
      <View style={styles.container}>
        <SearchBar onSearchCity={handleSearchedCity} />
        <View style={styles.info}>
          <Text>
            {weather.report.name},{weather.report.sys.country}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>
            {weather.report.weather[0].description},{weather.report.main.temp}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>
            Sunrise:{weather.report.sys.sunrise}, SunSet:
            {weather.report.sys.sunset}
          </Text>
        </View>
        <View style={styles.info}>
          <Text>Wind Speed-{weather.report.wind.speed}</Text>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    margin: 1,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
  // info: {
  //   padding: 10,
  //   margin: 10
  // }
});

export default CurrentWeather;
