import React from "react";

import { Form } from "../Form";

import "./Filters.css";

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
    },
    {
      labelText: "Search",
      inputType: "search",
    },
  ];

  render() {
    return <form>{this.renderInputs(this.inputs)}</form>;
  }
}
