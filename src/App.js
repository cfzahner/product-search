import React, { Fragment } from "react";

import { FilterableProductTable as ProductTable, Login } from "./components";

export const App = () => (
  <Fragment>
    <Login />
    <ProductTable />
  </Fragment>
);
