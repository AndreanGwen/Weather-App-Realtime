import React from "react";
import HomeBar from "../Fragments/homeBar";
import SideBar from "../Fragments/sideBar";

const Template = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen">
      <HomeBar />
      <SideBar />
    </div>
  );
};

export default Template;
