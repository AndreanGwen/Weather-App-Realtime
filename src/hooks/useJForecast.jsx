import { useEffect, useState } from "react";
import { getApiJForecast } from "../service/apiJForecast";
export const useJForecast = () => {
  const [forecast, setForecast] = useState(null);
  const name = localStorage.getItem("valueSearch");

  useEffect(() => {
    getApiJForecast(name, (data) => {
      setForecast(data);
    });
  }, []);

  return forecast;
};
