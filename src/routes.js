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
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/products">
      <ProductTable />
    </Route>
    <Route path="/about">
      <AboutUs />
    </Route>
    <Route path="/blog">
      <Blog />
    </Route>
  </Switch>
);
