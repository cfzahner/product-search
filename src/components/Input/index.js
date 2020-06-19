import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";
import kebabcase from "lodash.kebabcase";

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

  // Use 'label prop' to create the matching 'htmlFor' and 'id' for <label> and <input> respectively
  labelId = kebabcase(this.props.label);

  handleChange = ({ target }) => {
    this.props.proxy[target.dataset.st] = target[this.props.value];
  };

  render() {
    return (
      <div>
        <label htmlFor={this.labelId}>{this.props.label}</label>
        <input
          id={this.labelId}
          type={this.props.type}
          placeholder={this.props.label}
          data-st={this.props.st || camelCase(this.props.label)}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
