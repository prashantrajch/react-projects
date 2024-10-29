import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SearchLayout from "./components/SearchLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<App />} />
      <Route path="/search" element={<SearchLayout />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <RouterProvider router={router} />
    {/* <App /> */}
  </>
  // </StrictMode>
);
