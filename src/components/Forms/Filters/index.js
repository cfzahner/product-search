import PropTypes from "prop-types";
import React from "react";

import { Form } from "../Form";

import "./Filters.css";

export class Filters extends Form {
  static propTypes = {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      labelText: "Max Price",
      inputType: "number",
    },
    {
      labelText: "In Stock Only",
      inputType: "checkbox",
    },
    {
      labelText: "Search",
      inputType: "search",
    },
  ];

  handleChange = (event) => {
    this.props.onChange({
      [event.target.dataset.st]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  render() {
    return <form>{this.renderInputs(this.inputs)}</form>;
  }
}
