import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Order Your Favorite Food Here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo.
        </p>
        <button aria-label="View Menu">View Menu</button>
      </div>
    </header>
  );
};

export default Header;
