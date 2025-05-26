import React, { useEffect } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useJakartaAPI } from "../../hooks/useJakartaAPI";
import { useSearchValue } from "../../context/searchAPIContext";

const SideBarTitle = () => {
  const local = localStorage.getItem("valueSearch");
  const jakartaAPI = useJakartaAPI(local);

  return (
    <div className="flex w-full items-center p-3">
      <MapPinIcon style={{ width: 25 }} className="text-white" />
      {jakartaAPI && (
        <h1 className="text-2xl text-white">{jakartaAPI.location.region}</h1>
      )}
    </div>
  );
};

export default SideBarTitle;
