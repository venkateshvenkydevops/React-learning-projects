import React from "react";
import Logo from "../Images/Logo.jpg";
import "../Css/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo-Image" />
      </div>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
