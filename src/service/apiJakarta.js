import axios from "axios";

export const getJakartaAPI = (nameSearch, callback) => {
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=5e7a80d0e05843f9941131016252105&q= ${
        nameSearch ? nameSearch : "Jakarta"
      }`
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => console.log(err));
};
