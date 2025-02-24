import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "#explore-menu" },
  { name: "Mobile App", path: "#app-download" },
  { name: "Contact Us", path: "#footer" },
];

const Navbar = ({ setShowlogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext) || {};

  useEffect(() => {
    if (location.pathname === "/") {
      setMenu("Home");
    }
  }, [location.pathname]);

  const handleMenuClick = (name, path) => {
    setMenu(name);
    if (path.startsWith("#")) {
      document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        {menuItems.map(({ name, path }) => (
          <li key={name}>
            {path.startsWith("#") ? (
              <a
                href={path}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(name, path);
                }}
                className={menu === name ? "active" : ""}
              >
                {name}
              </a>
            ) : (
              <Link
                to={path}
                onClick={() => handleMenuClick(name, path)}
                className={menu === name ? "active" : ""}
              >
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div
            className={
              getTotalCartAmount && getTotalCartAmount() > 0 ? "dot" : ""
            }
          ></div>
        </div>
        <button onClick={() => setShowlogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
