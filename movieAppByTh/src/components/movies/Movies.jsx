import React from "react";
import { useGlobalContext } from "../../context/context";

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <div>
      {movie.map((currMovie) => (
        <div key={currMovie.Title}>
          <h2>{currMovie.Title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Movies;
