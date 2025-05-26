import { useEffect, useState } from "react";
import { getJakartaAPI } from "../service/apiJakarta";

export const useJakartaAPI = (nameSearch) => {
  const [jakartaAPI, setJakartaAPI] = useState(null);

  useEffect(() => {
    getJakartaAPI(nameSearch, (data) => {
      setJakartaAPI(data);
    });
  }, []);

  return jakartaAPI;
};
