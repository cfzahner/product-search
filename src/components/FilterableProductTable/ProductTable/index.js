import PropTypes from "prop-types";
import React from "react";

import { Fave } from "./Fave";

import "./ProductTable.css";

const renderTBody = (products) => {
  return products.map(({ name, price }, index) => {
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{price}</td>
        <td className="fave">
          <Fave />
        </td>
      </tr>
    );
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
