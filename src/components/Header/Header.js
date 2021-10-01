import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">Shop </Link>
      <Link to="/review">Oder Review</Link>
      <Link to="/manage">Manage Inventory Here</Link>
    </nav>
  );
};

export default Header;
