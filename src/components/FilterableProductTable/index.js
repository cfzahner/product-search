import React from "react";

import { Input } from "./Input";
import { ProductTable as Table } from "./ProductTable";

import { getAllProducts } from "api";
import { parseDollarPrice } from "utils";

export class FilterableProductTable extends React.Component {
  state = {
    inStockOnly: false,
    maxPrice: null,
    products: [],
    search: "",
  };

  // Scope our 'proxy' to 'this' entire object - class
  stateProxy = new Proxy(this, {
    // 'Trap' the object on which we attempted to change a 'prop' - 'comp'
    set(comp, prop, value) {
      // 'this' is scoped to 'set' - so we must 'comp' which will be the original 'this'
      // Use brackets to interpolate - 'prop'
      comp.setState({ [prop]: value });
      return true;
    },
  });

  filterCBs = {
    inStockOnly: ({ stocked }) => stocked,
    maxPrice: ({ price }) =>
      parseDollarPrice(price) <= parseFloat(this.state.maxPrice),
    search: ({ name }) =>
      name.toLowerCase().includes(this.state.search.toLowerCase()),
  };

  async componentDidMount() {
    try {
      this.setState({ products: await getAllProducts() });
    } catch (error) {
      console.error(error);
    }
  }

  filterCBNames = Object.keys(this.filterCBs);

  filterableStateNames = Object.keys(this.state).filter((stateName) =>
    this.filterCBNames.includes(stateName)
  );

  inputs = [
    {
      labelTextContent: "Max Price",
      inputType: "number",
    },
    {
      labelTextContent: "In Stock Only",
      inputType: "checkbox",
      val: "checked",
    },
    {
      labelTextContent: "Search",
      inputType: "search",
    },
  ];

  renderInputs() {
    return this.inputs.map(
      ({ labelTextContent, inputType, val = "value" }, index) => (
        <Input
          label={labelTextContent}
          type={inputType}
          value={val}
          proxy={this.stateProxy}
          key={index}
        />
      )
    );
  }

  render() {
    const filteredProducts = this.filterableStateNames.reduce(
      (accumulatedProducts, filterableStateName) => {
        if (this.state[filterableStateName]) {
          return accumulatedProducts.filter(
            this.filterCBs[filterableStateName]
          );
        }
        return accumulatedProducts;
      },
      this.state.products
    );

    return (
      <main>
        {this.renderInputs()}
        <Table products={filteredProducts} />
      </main>
    );
  }
}
