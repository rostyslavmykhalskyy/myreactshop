import React from "react";

import { Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Admin from "./pages/Admin";

const Routes = () => (
  <Switch>
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
