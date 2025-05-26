import React from "react";
import { useJakartaAPI } from "../../hooks/useJakartaAPI";

const Layer3Home = () => {
  const local = localStorage.getItem("valueSearch");
  const forecast = useJakartaAPI(local);

  return (
    <div
      className="text-white w-2/6 h-80 rounded-2xl p-4 sm:flex flex-col justify-center hidden sm:block"
      style={{ backgroundColor: "#0d0e10" }}
    >
      <h1 className="text-3xl pb-5 font-semibold">Detail Country</h1>
      <div className="flex flex-col gap-1 ">
        <h1>Name : {forecast?.location?.name}</h1>
        <h2>Region : {forecast?.location?.region}</h2>
        <h3>Local time : {forecast?.location?.localtime}</h3>
        <h4>ID : {forecast?.location?.tz_id}</h4>
      </div>

      <div className="pt-3 text-xs">
        <h1>IconLink</h1>
        <a href={forecast?.current?.condition?.icon}>
          {forecast?.current?.condition?.icon}
        </a>
      </div>
    </div>
  );
};

export default Layer3Home;
