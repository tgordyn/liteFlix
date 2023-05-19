import React, { createContext, useState } from "react";

export const localStorageContext = createContext([]);

const LocalStorageContextProvider = ({ children }) => {
  const [localStorageMovieData, setLocalStorageMovieData] = useState([]);

  return (
    <localStorageContext.Provider
      value={{ localStorageMovieData, setLocalStorageMovieData }}
    >
      {children}
    </localStorageContext.Provider>
  );
};

export default LocalStorageContextProvider;
