import React from "react";

import { Input } from "./Input";

export class Form extends React.Component {
  // Most of the time, we just want to update the individual form's state
  handleChange = (event) => {
    this.setState({
      [event.target.dataset.st]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  processFormData = (formControls, datasetKey) =>
    // Convert to ARRAY and 'filter' only inputs with 'ids' (not 'button', etc.)
    Array.from(formControls)
      .filter(({ dataset }) => dataset[datasetKey])
      // 'map' and transform each 'input' into an OBJECT
      .map(({ dataset, value }) => ({ [dataset[datasetKey]]: value }))
      .reduce((accumulatedData, currentData) => ({
        ...accumulatedData,
        ...currentData,
      }));

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
