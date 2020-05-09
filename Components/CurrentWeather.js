import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import * as api from "../api";
import SearchBar from "./SearchBar";
import WeatherForecast from "./WeatherForecast";
import WeatherCard from "./WeatherCard";

const CurrentWeather = () => {
  const [weather, setGetWeather] = useState({ report: [] });
  const [city, setCity] = useState("manchester");
  const [loading, setIsLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchedCity = searchedCity => {
    setCity(searchedCity);
    setShowSearch(false);
  };

  useEffect(() => {
    api.fetchWeather(city).then(data => {
      setGetWeather({ report: data });
      setIsLoading(false);
      setShowSearch(false);
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
      <View style={styles.screen}>
        <View style={styles.searchButton}>
          <Button title="search city" color='black' onPress={() => setShowSearch(true)} />
        </View>
        <View style={styles.searchBar}>
          <SearchBar
            onSearchCity={handleSearchedCity}
            showSearch={showSearch}
          />
        </View>
        <View style={styles.weatherCard}>
          <WeatherCard weather={weather.report} />
        </View>
        <View style={styles.weatherForecast}>
          <WeatherForecast city={city} />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  searchButton: {
    marginTop: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  searchBar: {
    flex: 0.1
  },
  weatherCard: {
    flex: 6.3
  },
  weatherForecast: {
    flex: 2
  },
  screen: {
    flex: 1,
    padding: 0,
    margin: 0.5
  }
});

export default CurrentWeather;
