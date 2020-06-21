import PropTypes from "prop-types";
import React from "react";

import "./Button.css";

export const Button = ({ buttonClass, label, onClick, type }) => (
  <button type={type} className={buttonClass} onClick={onClick}>
    {label}
  </button>
);
Button.defaultProps = {
  buttonClass: "success",
  label: "Submit",
  type: "submit",
};
Button.propTypes = {
  buttonClass: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
