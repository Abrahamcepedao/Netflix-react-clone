import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Home */
import Home from "./Home";
import List from "./List";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/list" component={List} />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
