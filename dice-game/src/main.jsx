import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DiceState from "./context/DiceState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DiceState>
    <App />
  </DiceState>
);
