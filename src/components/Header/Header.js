import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <nav>
      <Link to="/">Shop </Link>
      <Link to="/review">Oder Review</Link>
      <Link to="/manage">Manage Inventory Here</Link>
      {!user?.displayName ? (
        <>
          <Link to="/Login">Login</Link>
        </>
      ) : (
        <span className="logout" onClick={logout}>
          Logout
        </span>
      )}
      {user?.displayName && (
        <span className="display-name">Hello {user.displayName}</span>
      )}
    </nav>
  );
};

export default Header;
