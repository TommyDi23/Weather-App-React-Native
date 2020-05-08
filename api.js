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
    .get(`${baseURL}/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}`)
    .then(({ data }) => {
      return data;
    });
};

//http://api.openweathermap.org/data/2.5/forecast?q=london&cnt=5&appid=0be896d1cc97a82638c873fc30f4796d
