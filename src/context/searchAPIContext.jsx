import React, { Children, useContext } from "react";
import { createContext, useState } from "react";

const searchContext = createContext();
const searchContextDispatch = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <searchContext.Provider value={searchValue}>
      <searchContextDispatch.Provider value={setSearchValue}>
        {children}
      </searchContextDispatch.Provider>
    </searchContext.Provider>
  );
};

export const useSetSearchValue = () => useContext(searchContextDispatch);
export const useSearchValue = () => useContext(searchContext);
