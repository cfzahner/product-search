import PropTypes from "prop-types";
import React from "react";

import { ProductRow } from "./ProductRow";

import "./ProductTable.css";

const renderTBody = (products) => {
  return products.map(({ _id: id, name, price }) => {
    return <ProductRow id={id} name={name} price={price} key={id} />;
  });
};

export const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>
            <span role="img" aria-label="green heart">
              💚
            </span>{" "}
            means saved! 😉
          </th>
        </tr>
      </thead>
      <tbody>{renderTBody(products)}</tbody>
    </table>
  );
};
ProductTable.propTypes = {
  products: PropTypes.array,
};
