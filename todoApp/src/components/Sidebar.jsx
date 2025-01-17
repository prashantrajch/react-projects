import React from "react";
import { MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ activeMenu, handleMenuActive }) => {
  return (
    <div className={`sidebar ${activeMenu && "active"}`}>
      <button className="icon-btn">
        <MdClose className="icon" onClick={handleMenuActive} />
      </button>
      <ul className="navbar">
        <li className="nav-items">
          <NavLink to={"/"} className={`nav-link ${({isActive}) => isActive && 'active'}`} onClick={handleMenuActive}>
            Home
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink to={"/pending"} className={`nav-link ${({isActive}) => isActive && 'active'}`} onClick={handleMenuActive}>
            Pending
            <div className="badge">2</div>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to={"/completed"}
            className={`nav-link ${({isActive}) => isActive && 'active'}`}
            onClick={handleMenuActive}
          >
            Completed
            <div className="badge">4</div>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to={"/important"}
            className={`nav-link ${({isActive}) => isActive && 'active'}`}
            onClick={handleMenuActive}
          >
            Important
            <div className="badge">0</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
