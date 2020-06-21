import React from "react";

import {
  Header,
  Home,
  AboutUs,
  Blog,
  FilterableProductTable as ProductTable,
} from "./components";

import "./App.css";

export const App = () => (
  <div className="App">
    <Header />
    <Home />
    <AboutUs />
    <Blog />
    <ProductTable />
  </div>
);
