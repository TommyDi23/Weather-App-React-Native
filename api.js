import axios from "axios";
import { apiKey } from "./Apikey";
const baseURL = "http://api.openweathermap.org";

export const fetchWeather = city => {
  return axios
    .get(`${baseURL}/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(({ data }) => {
      return data;
    });
};

export const fetchForecast = city => {
  return axios
    .get(`${baseURL}/data/2.5/forecast?q=${city}&cnt=20&appid=${apiKey}`)
    .then(({ data }) => {
      return data;
    });
};



