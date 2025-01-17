import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { TodoContextProvider } from "./context/todoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </BrowserRouter>
  </StrictMode>
);
