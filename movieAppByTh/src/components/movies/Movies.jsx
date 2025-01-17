import React from "react";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) return <div className="loading">Loading....</div>;

  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movie.map((currMovie) => (
          <Link to={`movie/${currMovie?.imdbID}`} key={currMovie.imdbID}>
            <div className="card">
              <div className="card-info">
                <h2 className="card-title">{currMovie?.Title}</h2>
                <img
                  src={currMovie?.Poster}
                  alt={currMovie?.Title}
                  className="card-poster"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Movies;
