import React from "react";

import { Form } from "components/Forms/Form";
import { Input } from "components/Input";

export class Filters extends Form {
  state = {
    inStockOnly: false,
    maxPrice: null,
    search: "",
  };

  inputs = [
    {
      labelText: "Max Price",
      inputType: "number",
    },
    {
      labelText: "In Stock Only",
      inputType: "checkbox",
      valType: "checked",
    },
    {
      labelText: "Search",
      inputType: "search",
    },
  ];

  renderInputs() {
    return this.inputs.map(({ labelText, inputType, valType }, index) => (
      <Input
        label={labelText}
        type={inputType}
        value={valType}
        proxy={this.stateProxy}
        key={index}
      />
    ));
  }

  render() {
    return <form>{this.renderInputs()}</form>;
  }
}
