import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./NavLinks.css";
import { AuthContext } from "../Context/store";
import Button from "../FormElements/Button";

const NavLinks = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    ctx.isLogout();
    navigate("/");
  };

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {ctx.isLoggedIn && (
        <>
          <li>
            <NavLink to="/u1/places">MY PLACES</NavLink>
          </li>
          <li>
            <NavLink to="/places/new">ADD PLACES</NavLink>
          </li>
          <li>
            <Button onClick={logoutHandler}>LOGOUT</Button>
          </li>
        </>
      )}
      {!ctx.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
