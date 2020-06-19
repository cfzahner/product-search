import PropTypes from "prop-types";
import React from "react";

export class Input extends React.Component {
  static defaultProps = {
    type: "text",
    value: "value",
  };

  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          id={this.props.id || this.props.type}
          type={this.props.type}
          placeholder={this.props.placeholder || this.props.type}
        />
      </div>
    );
  }
}
