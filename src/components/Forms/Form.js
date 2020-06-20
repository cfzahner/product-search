import React from "react";

import { Input } from "./Input";

export class Form extends React.Component {
  handleChange = (event) => {
    this.setState({
      // Use the 🐫Cased id of the input along with either the truthy value or 'checked'
      [event.target.dataset.st]: event.target.value || event.target.checked,
    });
  };

  renderInputs = (inputs) =>
    inputs.map(({ labelText, inputType }) => (
      <Input
        label={labelText}
        type={inputType}
        key={labelText}
        handleChange={this.handleChange.bind(this)}
      />
    ));
}
