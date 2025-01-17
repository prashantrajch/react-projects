import { NavLink } from "react-router-dom";
import { useTodoContext } from "../context/todoContext";

const Navbar = () => {
  const{pendingData,completedData,importantData} = useTodoContext()

  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="nav-items">
          <NavLink
            to={"/"}
            className={`nav-link ${({ isActive }) => isActive && "active"}`}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to={"/pending"}
            className={`nav-link ${({ isActive }) => isActive && "active"}`}
          >
            Pending
            <div className="badge">{pendingData.length}</div>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to={"/completed"}
            className={`nav-link ${({ isActive }) => isActive && "active"}`}
          >
            Completed
            <div className="badge">{completedData.length}</div>
          </NavLink>
        </li>
        <li className="nav-items">
          <NavLink
            to={"/important"}
            className={`nav-link ${({ isActive }) => isActive && "active"}`}
          >
            Important
            <div className="badge">{importantData.length}</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
