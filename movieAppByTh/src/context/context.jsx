import { createContext, useContext, useEffect, useState } from "react";
import conf from "../conf";

const API_URL = `http://www.omdbapi.com/`;

const AppContext = createContext();

// we need to create  a provider fun

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(`${url}?apikey=${conf.MovieAPIKey}&s=titanic`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // getMovies(API_URL)
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie }}>
      {children}
    </AppContext.Provider>
  );
};

// Global custom hooks.

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
