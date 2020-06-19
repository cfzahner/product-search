import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";

import "./Input.css";

export class Input extends React.Component {
  static defaultProps = {
    type: "text",
    value: "value",
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    proxy: PropTypes.object.isRequired,
    st: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  };

  // All attributes to be camelCased
  camelCaseLabel = camelCase(this.props.label);

  handleChange = ({ target }) => {
    this.props.proxy[target.dataset.st] = target[this.props.value];
  };

  render() {
    return (
      <div>
        <label htmlFor={this.camelCaseLabel}>{this.props.label}</label>
        <input
          id={this.camelCaseLabel}
          type={this.props.type}
          placeholder={this.props.label}
          data-st={this.props.st || this.camelCaseLabel}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
