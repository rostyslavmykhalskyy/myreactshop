import React from "react";
import Cart from "./Cart";
import Search from "./Search";

import Logo from "../assets/logo.png";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="" />
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <div className="header__search">
        <Search />
      </div>
      <div className="header__cart">
        <Cart />
      </div>
    </header>
  );
};

export default withRouter(Header);
