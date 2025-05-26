import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchValue } from "../../context/searchAPIContext";
import { useSetSearchValue } from "../../context/searchAPIContext";

const SearchBar = () => {
  const value = useSearchValue();
  const setValue = useSetSearchValue();
  const [searchValue, setSearchValue] = useState("");
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setValue(input);
    setSearchValue(value);
    localStorage.setItem("valueSearch", input);
    window.location.reload();
  };

  return (
    <div
      style={{ backgroundColor: "#f6f6f8" }}
      className="flex justify-center h-9 gap-2 rounded-2xl w-full items-center "
    >
      <MagnifyingGlassIcon className="w-6" />

      <input
        className="text-black rounded-2xl"
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search for place.."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
