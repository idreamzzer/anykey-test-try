import React from "react";
import { Switch, Route } from "react-router-dom";
import withHeaderOffset from "../HOC/withHeaderOffset";

import Index from "../pages/index";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route component={withHeaderOffset(NotFound)} />
    </Switch>
  );
};

export default Routes;
