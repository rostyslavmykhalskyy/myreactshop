import React from "react";
import jwtDecode from "jwt-decode";
import cookie from "js-cookie";

import { Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { useDispatch } from "react-redux";
import { setUser } from "./store/actions";

const Routes = () => {
  const dispatch = useDispatch();
  const authCookie = () => {
    const userSession = cookie.get("__session");
    if (userSession) {
      const decodedToken = jwtDecode(userSession);
      return decodedToken;
    } else return false;
  };
  if (authCookie()) {
    const userData = authCookie();
    dispatch(setUser(userData));
  }
  return (
    <Switch>
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
    </Switch>
  );
};

export default Routes;
