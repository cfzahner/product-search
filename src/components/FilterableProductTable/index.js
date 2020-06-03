import React from "react";

import { SearchBar as Search } from "./SearchBar";
import { ProductTable as Table } from "./ProductTable";

import { getAllProducts } from "../../api";

export class FilterableProductTable extends React.Component {
  state = {
    searchTerm: "",
    isInStockOnly: false,
    products: [],
  };

  handleFilterChange = (searchTerm) => {
    this.setState({ searchTerm });
  };

  handleShowInStockChange = (isInStockOnly) => {
    this.setState({ isInStockOnly });
  };

  async componentDidMount() {
    try {
      this.setState({ products: await getAllProducts() });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const filteredProducts = this.state.products.filter(({ name }) =>
      name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <main>
        <Search
          onFilterChange={this.handleFilterChange}
          onShowInStockChange={this.handleShowInStockChange}
        />
        <Table products={filteredProducts} />
      </main>
    );
  }
}
