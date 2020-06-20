import React from "react";

import { ProductTable as Table } from "./ProductTable";

import { getAllProducts } from "api";
import { parseDollarPrice } from "utils";

import { Filters } from "../Forms/Filters";

export class FilterableProductTable extends React.Component {
  state = {
    inStockOnly: false,
    maxPrice: null,
    products: [],
    search: "",
  };

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
      valType: "checked",
    },
    {
      labelTextContent: "Search",
      inputType: "search",
    },
  ];

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
      <main className="FilterableProductTable">
        <Filters />
        <Table products={filteredProducts} />
      </main>
    );
  }
}
