import React from "react";
import SearchBar from "../Elements/searchBar";
import DetailInfoSideB from "../Elements/detailInfoSideB";
import SideBarTitle from "../Elements/sideBarTitle";
import SummaryInfoSideB from "../Elements/summaryInfoSideB";
import { useJakartaAPI } from "../../hooks/useJakartaAPI";

const SideBar = () => {
  const local = localStorage.getItem("valueSearch");
  const jakartaAPI = useJakartaAPI(local);

  return (
    <div className="bg-black md:w-1/4 h-screen pt-7 px-7 flex flex-col justify-around ">
      <h1 className="w-full justify-start text-2xl pb-5 text-white">
        Hello Everyone,
      </h1>
      <SearchBar />

      <div
        className="flex h-fit w-full items-center  rounded-2xl flex-col pb-3"
        style={{ backgroundColor: "#0d0e10" }}
      >
        <div className="w-full">
          <SideBarTitle />
        </div>
        <div className="flex flex-col items-center ">
          <DetailInfoSideB />
        </div>
      </div>

      {jakartaAPI?.current?.temp_c && jakartaAPI?.current?.temp_f && (
        <div className="w-full bg-neutral-900 text-white mt-4 h-fit rounded-2xl  hover:transform hover:scale-110 transition-all duration-300 ease-in-out">
          <SummaryInfoSideB
            info1={`Temp C : ${jakartaAPI.current.temp_c}`}
            info2={`Temp C : ${jakartaAPI.current.temp_f}`}
          />
        </div>
      )}

      <div className="w-full  bg-neutral-900 text-white mt-4 h-fit rounded-2xl  hover:transform hover:scale-110 transition-all duration-300 ease-in-out">
        <SummaryInfoSideB
          info1=<a href="https://www.weatherapi.com">Ref : weatherapi.com</a>
        />
      </div>
    </div>
  );
};

export default SideBar;
