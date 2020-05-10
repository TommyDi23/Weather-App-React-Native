import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ForecastCard from "./ForecastCard";
import * as api from "../api";

const WeatherForecast = ({ city }) => {
  const [forecast, setForecast] = useState({ report: [] });
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .fetchForecast(city)
      .then(data => {
        setForecast({ report: data.list });
        setIsLoading(false);
      })
  }, [])

  if (loading)
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );
  else
    return (
      <View>
        <ForecastCard forecast={forecast.report} />
      </View>
    );
};



export default WeatherForecast;
