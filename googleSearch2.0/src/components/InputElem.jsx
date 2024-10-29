import React, { useState } from "react";

function InputElem({ searchValue,setSearchValue}) {

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        aria-label="search-input"
        className="w-full h-full outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
}

export default InputElem;
