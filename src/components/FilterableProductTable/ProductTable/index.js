import PropTypes from "prop-types";
import React from "react";

const renderTBody = (products) => {
  return products.map(({ name, price }, index) => {
    return (
      <tr key="index">
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  });
};

export const ProductTable = ({ products }) => {
  return (
    <table>
      <tbody>{renderTBody(products)}</tbody>
    </table>
  );
};
ProductTable.propTypes = {
  products: PropTypes.array,
};
