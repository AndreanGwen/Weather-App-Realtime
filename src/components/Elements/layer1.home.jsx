import React, { useEffect } from "react";
import Card from "./cardTWeek";
import { useJForecast } from "../../hooks/useJForecast";
const Layer1Home = () => {
  const forecast = useJForecast();

  return (
    <div
      className="text-white  w-full h-72 rounded-2xl  p-4 sm:flex items-center flex-wrap gap-3 justify-center items-center hidden sm:block"
      style={{ backgroundColor: "#0d0e10" }}
    >
      {forecast?.map((item) => {
        return (
          <Card
            date={item.date}
            maxTemp={item.day.maxtemp_c}
            image={item.day.condition.icon}
            condition={item.day.condition.text}
            moonPhase={item.astro.moon_phase}
          />
        );
      })}
    </div>
  );
};

export default Layer1Home;
