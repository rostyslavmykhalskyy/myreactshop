import React from "react";
import Cart from "./Cart";
import Search from "./Search";
import Favorite from "./Favorite";

import Logo from "../assets/logo.png";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__actions">
        <Search />
        <Favorite />
        <Cart />
      </div>
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className="header__nav">
        <div className="user-location">
          <p>EN / USD</p>
          <button className="btn-icon">
            <i className="i-chevron"></i>
          </button>
        </div>
        <ul>
          <li>
            <Link to="signin">Sign in</Link>
          </li>
          <li>
            <Link to="signin">About</Link>
          </li>
          <li>
            <Link to="signin">Contact us</Link>
          </li>
          {/* <li>
            <Link to="/admin">Admin</Link>
          </li> */}
        </ul>
      </nav>
      {/* <div className="header__search"></div> */}
      {/* <div className="header__cart"></div> */}
    </header>
  );
};

export default withRouter(Header);
