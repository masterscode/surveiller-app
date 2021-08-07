import React from "react";
import { Route, Switch } from "react-router-dom";
import { Beans } from "./pages/Beans";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beans" exact component={Beans} />
    </Switch>
  );
};
export default Routes;
