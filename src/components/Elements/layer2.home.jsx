import React from "react";
import { useJForecast } from "../../hooks/useJForecast";

const Layer2Home = () => {
  const forecast = useJForecast();

  return (
    <div
      className="text-white w-3/6 h-80 rounded-2xl pb-4 pt-4 pl-8 pr-8 sm:flex flex-wrap gap-2 justify-around items-center hidden sm:block"
      style={{ backgroundColor: "#0d0e10" }}
    >
      {forecast?.map((fore) => {
        return (
          <div
            className="w-36 h-32 rounded-2xl text-xs sm:flex sm:block p-1 flex flex-col justify-center hidden sm:block"
            style={{ backgroundColor: "#9EC8B9" }}
          >
            <h1 className="text-xs text-black sm:block sm:flex hidden sm:block">
              Astro {fore?.date}
            </h1>
            <p>Moon Rise : {fore?.astro?.moonrise}</p>
            <p>Moon Set : {fore?.astro?.moonset}</p>
            <p>Sunrise : {fore?.astro?.sunrise}</p>
            <p>Sunset : {fore?.astro?.sunset}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Layer2Home;
