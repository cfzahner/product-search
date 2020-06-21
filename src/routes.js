import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  Home,
  FilterableProductTable as ProductTable,
  AboutUs,
  Blog,
} from "./components";

export const Routes = () => (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/products">
      <ProductTable />
    </Route>
    <Route exact path="/about">
      <AboutUs />
    </Route>
    <Route exact path="/blog">
      <Blog />
    </Route>
  </Switch>
);
