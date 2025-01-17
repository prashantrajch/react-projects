import React from "react";
import { useGlobalContext } from "../../context/context";

const Search = () => {
  const { isError, query, setQuery } = useGlobalContext();
  return (
    <section>
      <h2>Search Your Favourite Movie</h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          placeholder="Search movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
