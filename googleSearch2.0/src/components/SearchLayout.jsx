import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useSearchParams } from "react-router-dom";
import Results from "./Results";

function SearchLayout() {
  const [params] = useSearchParams();
  const query = params.get("q");
  const type = params.get("type");



  return (
    <>
      <Navbar type={type} query={query} />
      <div
        className={`px-4 ${
          type !== "videos"
            ? type !== "images"
              ? "w-[650px] ml-32 flex flex-col gap-5"
              : "w-full grid grid-cols-6 gap-4"
            : "w-full flex flex-wrap gap-4"
        }`}
      >
        <Results type={type} query={query} />
      </div>
    </>
  );
}

export default SearchLayout;
