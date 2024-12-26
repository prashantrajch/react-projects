import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Resume from "./page/Resume/Resume.jsx";
import Works from "./page/Works/Works.jsx";
import Blogs from "./page/Blogs/Blogs.jsx";
import Contact from "./page/Contact/Contact.jsx";
import About from "./page/About/About.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<About />} />
      <Route path="resume" element={<Resume />} />,
      <Route path="works" element={<Works />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    {/* <App /> */}
  </StrictMode>
);
