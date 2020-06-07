import PropTypes from "prop-types";
import React from "react";

export class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleChange = ({ target }) => {
    target.value;
  };
}
