import React from "react";
import ImageSideBar from "../Elements/imageSideBar";
import { useJakartaAPI } from "../../hooks/useJakartaAPI";

const DetailInfoSideB = () => {
  const local = localStorage.getItem("valueSearch");
  const jakartaAPI = useJakartaAPI(local);

  return (
    <div className="flex flex-col items-center text-white">
      <img src="/thumbnail.png" width={180} alt="" className="pb-2" />
      {jakartaAPI?.current?.last_updated && (
        <h1 className="text-xs">
          Last Update : {jakartaAPI.current.last_updated}
        </h1>
      )}

      {jakartaAPI?.current?.temp_c && (
        <p className="text-4xl pt-5 font-bold">
          {jakartaAPI.current.temp_c}&deg;C
        </p>
      )}

      {jakartaAPI?.current.condition?.text && (
        <p className="text-xs pb-5 text-center">
          {jakartaAPI.current.condition.text}
        </p>
      )}

      {jakartaAPI?.current?.wind_kph && (
        <p className="text-xs">Wind | {jakartaAPI.current.wind_kph}km/h</p>
      )}

      {jakartaAPI?.current?.humidity && (
        <p>Hum | {jakartaAPI.current.humidity}</p>
      )}
    </div>
  );
};

export default DetailInfoSideB;
