import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import * as api from "../api";
import SearchBar from "./SearchBar";
import WeatherForecast from "./WeatherForecast";

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

  if (loading)
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );
  else
    return (
      <ScrollView horizontal={true}>
        <View style={styles.searchBar}>
          <SearchBar onSearchCity={handleSearchedCity} />
          <View style={styles.info}>
            <Text style={styles.cityName}>
              {weather.report.name}({weather.report.sys.country})
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.description}>
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
          <WeatherForecast city={city} />
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  searchBar: {},
  info: {
    padding: 10,
    margin: 10
  },
  cityName: {
    fontSize: 40
  },
  description: {
    fontSize: 20,
    alignItems: "stretch"
  }
});

export default CurrentWeather;
