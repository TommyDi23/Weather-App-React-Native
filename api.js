import axios from "axios";
import { apiKey } from "./Apikey";
//const baseURL = "http://api.openweathermap.org";

export const fetchWeather = city => {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
    .then(({ data }) => {
      return data;
    });
};
