import React, { Fragment } from "react";

import {
  FilterableProductTable as ProductTable,
  Navigation as FakeNavigation,
} from "./components";

export const App = () => (
  <Fragment>
    <FakeNavigation />
    <ProductTable />)
  </Fragment>
);
