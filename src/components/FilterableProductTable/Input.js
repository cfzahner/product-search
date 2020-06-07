import PropTypes from "prop-types";
import React from "react";

import kebabcase from "lodash.kebabcase";

export class Input extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  };

  handleChange = ({ target }) => {
    console.log(target[this.props.value]);
  };

  kebabLabel = kebabcase(this.props.label);

  render() {
    return (
      <div>
        <label htmlFor={this.kebabLabel}>{this.props.label}</label>
        <input
          id={this.kebabLabel}
          type={this.props.type}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
