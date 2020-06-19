import { Input } from "components/Input";

import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";
import kebabcase from "lodash.kebabcase";

import "./Input.css";

export class ProxyInput extends Input {
  static propTypes = {
    proxy: PropTypes.object.isRequired,
  };

  handleChange = ({ target }) => {
    // Update the appropriate prop in 'proxy'
    // This will trigger the Parent to do a 'setState'
    this.props.proxy[camelCase(this.props.label)] = target[this.props.value];
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
