import axios from "axios";

export const getApiJForecast = (name, callback) => {
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=5e7a80d0e05843f9941131016252105&q=${
        name ? name : "Jakarta"
      }&days=6`
    )
    .then((res) => callback(res.data.forecast.forecastday))
    .catch((err) => console.log(err));
};
