import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ForecastCard from "./ForecastCard";
import * as api from "../api";
import Loading from "./Loading";

const WeatherForecast = ({ city }) => {
  const [forecast, setForecast] = useState({ report: [] });
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchForecast(city).then(data => {
      setForecast({ report: data.list });
      setIsLoading(false);
    });
  }, [city]);

  if (loading) return <Loading />;
  else
    return (
      <View>
        <ForecastCard forecast={forecast.report} />
      </View>
    );
};

export default WeatherForecast;
