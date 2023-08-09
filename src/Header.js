import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://avatars.githubusercontent.com/u/61337194?v=4" />
      </div>
      <div className="header-pages">
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/about">
          <p>about</p>
        </Link>
        <Link to="/contact">
          <p>contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
