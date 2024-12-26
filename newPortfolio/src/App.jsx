import { useState } from "react";
import lightImg from "./assets/img/bgImg/page-bg-1.jpg";
import darkImg from "./assets/img/bgImg/page-bg-dark-1.jpg";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div
      style={{
        backgroundImage: `url(${mode ? lightImg : darkImg})`,
      }}
      className={`h-screen bg-[50%] bg-cover ${mode?'light': 'dark'}`}
    >
      <Header  mode={mode} setMode={setMode}/>
      <div className="container flex gap-4">
        <div className="w-1/4">
        <Profile />
        </div>
        <div className="2xl:w-2/3 w-full bg-white rounded-md">
          <Outlet />
        </div>
        <div className="max-2xl:hidden w-1/12 bg-white rounded-md">
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
