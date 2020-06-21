import PropTypes from "prop-types";
import React from "react";

import "./Button.css";

export const Button = ({ buttonClass, buttonText, onClick, type }) => (
  <button type={type} className={buttonClass} onClick={onClick}>
    {buttonText}
  </button>
);
Button.defaultProps = {
  buttonClass: "success",
  buttonText: "Submit",
  type: "submit",
};
Button.propTypes = {
  buttonClass: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
