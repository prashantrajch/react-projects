import { createContext, useContext, useEffect, useState } from "react";
import conf from "../conf";
import { data } from "react-router-dom";

const API_URL = `http://www.omdbapi.com/`;

const AppContext = createContext();

// we need to create  a provider fun

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);
    setIsError({
      show: false,
      msg: "",
    });
    
    try {
      const res = await fetch(`${url}?apikey=${conf.MovieAPIKey}&s=${query}`);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (query) {
        console.log("i am run");
        getMovies(API_URL);
      }
    }, 1000);
    return () => {
      console.log("clear");
      clearTimeout(timeout);
    };
  }, [query]);

  // console.log("data:-",movie)
  console.log(isError);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// Global custom hooks.

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
