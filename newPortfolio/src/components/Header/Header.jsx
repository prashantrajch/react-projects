import React, { useState } from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import MobileNav from "../Navbar/MobileNav";

const Header = ({ mode, setMode }) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="container pt-[50px] 2xl:mb-[205px] mb-[50px] ">
      <div className="header flex items-center justify-between p-4">
        <div className="logo">
          <h2 className="text-2xl font-bold text-orange-400">Prash</h2>
        </div>
        <div className="header-icons flex items-center gap-4">
          <button
            onClick={() => setMode(!mode)}
            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer shadow-md bg-white rounded-full btn-hover dark:bg-black dark:text-white outline-none"
          >
            {mode ? <RiMoonClearFill size={20} /> : <IoSunnySharp size={20} />}
          </button>
          <button
            onClick={() => setMenuActive(!menuActive)}
            className="w-[40px] h-[40px] 2xl:hidden flex items-center justify-center cursor-pointer shadow-md bg-blue-500 text-white rounded-full outline-none"
          >
            {menuActive ? <IoClose size={20} /> : <RiMenu2Line size={20} />}
          </button>
        </div>
      </div>
      <div className="mobile-nav relative">
        <MobileNav menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
    </div>
  );
};

export default Header;
