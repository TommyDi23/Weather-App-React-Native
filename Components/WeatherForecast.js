import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import * as api from "../api";

const WeatherForecast = props => {
  const [forecast, setForecast] = useState({ report: [] });
  //const [city, setCity] = useState("manchester");
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchForecast(props.city).then(data => {
      setForecast({ report: data.list });
      setIsLoading(false);
    });
  }, [props.city]);

  // console.log(
  //   forecast.report.map(item =>
  //     console.log(
  //       item.weather[0].main,
  //       item.main.temp,
  //       item.wind.speed,
  //       item.dt_txt
  //     )
  //   )
  // );

  if (loading)
    return (
      <View>
        <Text>...loading</Text>
      </View>
    );
  else
    return (
      <View>
        <FlatList renderItem={hourly => console.log(hourly)} />
        {/* <View>
          <Text>in forecast</Text>
        </View>
        <View>
          {forecast.report.map(hourly => (
            <Text>
              {hourly.weather[0].main},{hourly.wind.speed}
            </Text>
          ))}
        </View> */}
      </View>
    );
};

export default WeatherForecast;
