import { MdMenuOpen, MdNightlight, MdOutlineLightMode } from "react-icons/md";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTodoContext } from "../context/todoContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const { handleSearch } = useTodoContext();
  const location = useLocation();

  const handleMenuActive = () => {
    setActiveMenu(false);
  };

  const handleSearchInput = (value) => {
    const currentPage = location.pathname; // Get the current path
    handleSearch(value, currentPage); // Pass the search value and current page to the context
  };

  useEffect(() => {
    if (darkMode) {
      document.querySelector("body").classList.toggle("dark");
    }
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.85 99.56">
            <path
              d="M98.78 79.79c0 4.31-.14 8.63 0 12.93s-1.41 5.73-5.78 6.17c-6.9.7-13.7-.14-20.53-.09-16.93.13-33.85.5-50.77.74a18.21 18.21 0 0 1-5.23-.38c-2.56-.72-3.37-2.4-1.37-4.6 1.62-1.77 3.36-3.43 5-5.13q24.74-25 49.43-50c2.21-2.25 4.36-2.12 6.28-.26 7.4 7.09 14.85 14.09 21.58 21.83 1.26 1.44 1.39 3.17 1.39 4.95z"
              fill="#fa6663"
            />
            <path
              d="M0 42.73V6.81C.06 1.09 1.05.1 6.75.05c8-.07 16 0 24 0a11.75 11.75 0 0 1 9.35 3.84c5.82 6.14 11.92 12 18 17.84 2.68 2.54 2.66 4.41 0 7.07C40 46.62 22.14 64.64 4.18 82.6c-.75.75-1.34 2.12-2.65 1.66-1.71-.6-1.47-2.32-1.47-3.7C0 68 0 55.34 0 42.73z"
              fill="#8a56c2"
            />
            <path
              d="M98.68 19v13.4c0 1.1 0 2.36-1.22 2.92-1.36.62-2.48-.07-3.42-1Q79.67 19.88 65.34 5.45c-1.09-1.11-2.42-2.37-1.45-4.16C64.71-.22 66.35 0 67.76 0h25.39c3.78 0 5.57 1.83 5.54 5.58-.03 4.42 0 8.93-.01 13.42z"
              fill="#fbb355"
            />
          </svg>
        </Link>
      </div>

      <div className="search-container">
        <Navbar />
        <Sidebar activeMenu={activeMenu} handleMenuActive={handleMenuActive} />
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search your notes"
            className="search-input"
            onChange={(e) => handleSearchInput(e.target.value.trim())}
          />
        </form>
      </div>

      <div className="btns">
        <button
          className="dark-btn icon-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <MdOutlineLightMode className="icon" />
          ) : (
            <MdNightlight className="icon" />
          )}
        </button>
        <button
          className="icon-btn menu-btn"
          onClick={() => setActiveMenu(true)}
        >
          <MdMenuOpen className="icon" />
        </button>
      </div>

      <div className="background-text">Todo</div>
    </header>
  );
};

export default Header;
