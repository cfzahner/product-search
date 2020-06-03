import PropTypes from "prop-types";
import React, { Fragment } from "react";

export class SearchBar extends React.Component {
  static propTypes = {
    onFilterChange: PropTypes.func,
    onShowInStockChange: PropTypes.func,
  };

  handleCheckboxChange = (event) => {
    this.props.onShowInStockChange(event.target.checked);
  };

  handleInputChange = (event) => {
    // Send the value from the input that caused this 'event' to the parent
    this.props.onFilterChange(event.target.value);
  };

  render() {
    return (
      // https://reactjs.org/docs/fragments.html
      <Fragment>
        <div>
          <label htmlFor="filter">Search</label>
          <input id="filter" type="search" onChange={this.handleInputChange} />
        </div>
        <div>
          <label htmlFor="in-stock">Only Show In Stock Items</label>
          <input
            id="in-stock"
            type="checkbox"
            onChange={this.handleCheckboxChange}
          />
        </div>
      </Fragment>
    );
  }
}
