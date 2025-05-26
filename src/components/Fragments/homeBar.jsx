import React from "react";
import Layer1Home from "../Elements/layer1.home";
import Layer2Home from "../Elements/layer2.home";
import Layer3Home from "../Elements/layer3.home";

const HomeBar = () => {
  const handleReset = () => {
    localStorage.removeItem("valueSearch");
    window.location.reload();
  };

  return (
    <div
      className="w-5/6 h-screen p-7 flex flex-col justify-center gap-4 hidden sm:flex "
      style={{ backgroundColor: "#000000" }}
    >
      <div className="flex gap-5">
        <h1 className="text-white pb-2 text-3xl font-light font-sans">
          Today / Week
        </h1>
        <button
          className="text-black bg-blue-100 w-20 rounded-2xl cursor-pointer hover:transform hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <Layer1Home />
      <div className="flex gap-4 justify-start flex-wrap">
        <Layer2Home />
        <Layer3Home />
      </div>
    </div>
  );
};

export default HomeBar;
