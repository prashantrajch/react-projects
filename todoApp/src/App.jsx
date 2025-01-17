import { Route, Routes } from "react-router-dom";
import { Completed, Error, Home, Important, Pending } from "./pages";
import { Header } from "./components";
import { ToastContainer } from "react-toastify";
const App = () => {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/important" element={<Important />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default App;
