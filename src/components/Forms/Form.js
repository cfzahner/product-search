import React from "react";

import { Input } from "./Input";

export class Form extends React.Component {
  // Most of the time, we just want to update the individual form's state
  handleChange = (event) => {
    this.setState({
      // Use the 🐫Cased id to set state
      [event.target.dataset.st]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  renderInputs = (inputs) =>
    inputs.map(({ labelText, inputType }) => (
      <Input
        label={labelText}
        type={inputType}
        key={labelText}
        onChange={this.handleChange}
      />
    ));
}
