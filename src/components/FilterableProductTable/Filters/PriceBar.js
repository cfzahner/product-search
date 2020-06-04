import PropTypes from "prop-types";
import React from "react";

export class PriceBar extends React.Component {
  static propTypes = {
    onPriceChange: PropTypes.func,
  };

  handleInputChange = ({ target }) => {
    // Send the value from the input that caused this 'event' to the parent
    this.props.onPriceChange(target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="price">Max Price</label>
        <input id="price" type="number" onChange={this.handleInputChange} />
      </div>
    );
  }
}
