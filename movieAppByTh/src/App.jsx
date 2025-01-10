import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleMovie from "./components/movies/SingleMovie";
import { Error, Home } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
