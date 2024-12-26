import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";

function MobileNav({ menuActive, setMenuActive }) {
  return (
    <nav
      className={`2xl:hidden block absolute top-0 left-0 right-0 bg-white dark:bg-black dark:text-white py-[20px] rounded-md drop-shadow-xl origin-top duration-700 z-30  ${
        menuActive ? "scale-y-100" : "scale-y-0"
      }`}
      onClick={() => setMenuActive(!menuActive)}
    >
      <ul>
        <li className="py-[5px] link-hover">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `py-[5px] px-[70px] inline-flex items-center gap-2  ${
                isActive ? "text-blue-500" : " "
              }`
            }
          >
            <FaRegUser />
            About
          </NavLink>
        </li>
        <li className="py-[5px] link-hover">
          <NavLink
            to={"/resume"}
            className={({ isActive }) =>
                `py-[5px] px-[70px] inline-flex items-center gap-2  ${
                  isActive ? "text-blue-500" : " "
                }`
              }
          >
            <IoDocumentTextOutline />
            Resume
          </NavLink>
        </li>
        <li className="py-[5px] link-hover">
          <NavLink
            to={"/works"}
            className={({ isActive }) =>
                `py-[5px] px-[70px] inline-flex items-center gap-2  ${
                  isActive ? "text-blue-500" : " "
                }`
              }
          >
            <MdOutlineWorkOutline />
            Works
          </NavLink>
        </li>
        <li className="py-[5px] link-hover">
          <NavLink
            to={"/blogs"}
            className={({ isActive }) =>
                `py-[5px] px-[70px] inline-flex items-center gap-2  ${
                  isActive ? "text-blue-500" : " "
                }`
              }
          >
            <FaBlogger />
            Blogs
          </NavLink>
        </li>
        <li className="py-[5px] link-hover">
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
                `py-[5px] px-[70px] inline-flex items-center gap-2  ${
                  isActive ? "text-blue-500" : " "
                }`
              }
          >
            <RiContactsBookLine />
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
